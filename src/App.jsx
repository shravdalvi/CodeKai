import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Terminal, Code2, Play, CheckCircle2, ChevronRight, ChevronDown,
  PlayCircle, PauseCircle, RotateCcw, Monitor, XCircle, Zap, LogOut, List, Trophy
} from 'lucide-react';
import { dummyPatterns } from './data';
import Editor from '@monaco-editor/react';
import Auth from './Auth';
import { runCode, analyzeWithGroq } from './api';
import './App.css';

// ── Piston API (no "runtime" field — causes 401) ──────────────────────────────
const LANGUAGE_MAP = {
  javascript: { language: 'javascript', version: '18.15.0' },
  python:     { language: 'python',      version: '3.10.0'  },
  java:       { language: 'java',        version: '15.0.2'  },
  cpp:        { language: 'c++',         version: '10.2.0'  },
};

const ANIME_AVATARS = [
  { id: 'gojo', name: 'Satoru Gojo', url: '/avatars/gojo.png' },
  { id: 'goku', name: 'Son Goku', url: '/avatars/goku.png' },
  { id: 'jinwoo', name: 'Jinwoo', url: '/avatars/jinwoo.png' },
  { id: 'l', name: 'L', url: '/avatars/l.png' },
  { id: 'light', name: 'Yagami Light', url: '/avatars/light.png' },
  { id: 'maki', name: 'Maki', url: '/avatars/maki.png' },
  { id: 'choso', name: 'Choso', url: '/avatars/choso.png' },
  { id: 'yuta', name: 'Yuta', url: '/avatars/yuta.png' }
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function splitTopLevel(str, delim) {
  const parts = []; let depth = 0, inStr = false, strCh = '', cur = '';
  for (const ch of str) {
    if (!inStr && '([{'.includes(ch)) { depth++; cur += ch; }
    else if (!inStr && ')]}'.includes(ch)) { depth--; cur += ch; }
    else if (!inStr && (ch === '"' || ch === "'")) { inStr = true; strCh = ch; cur += ch; }
    else if (inStr && ch === strCh) { inStr = false; cur += ch; }
    else if (!inStr && depth === 0 && ch === delim) { parts.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

/** Parse "nums = [1,2], target = 5" → [{ key:'nums', raw:'[1,2]' }, ...] */
function parseInputFields(inputStr) {
  return splitTopLevel(inputStr, ',').map(part => {
    const eq = part.indexOf('=');
    if (eq === -1) return { key: '', raw: part.trim() };
    return { key: part.slice(0, eq).trim(), raw: part.slice(eq + 1).trim() };
  });
}

/** Parse to JS values */
function parseTestArgs(inputStr) {
  const map = {};
  for (const { key, raw } of parseInputFields(inputStr)) {
    try { map[key] = JSON.parse(raw); } catch { map[key] = raw.replace(/^['"`]|['"`]$/g, ''); }
  }
  return map;
}

// ── Class-style starter code transformer ─────────────────────────────────────
/**
 * Converts plain-function starter code to LeetCode class Solution style.
 * Called once when a question or language is first loaded.
 */
function wrapInClassStyle(code, lang) {
  if (!code) return code;

  if (lang === 'python') {
    if (/class\s+Solution\s*:/.test(code)) return code.replace(/\n\s*pass\b/, ''); // already wrapped
    // Strip out the 'pass' keyword from the template
    let rawCode = code.replace(/\n\s*pass\b/, '');
    
    // Extract: def methodName(params): → indent inside class Solution
    const lines = rawCode.split('\n');
    const newLines = lines.map(line => {
      if (/^\s*def\s+(\w+)\s*\(/.test(line)) {
        // Insert self as first param
        return line.replace(
          /def\s+(\w+)\s*\(([^)]*)\)/,
          (_, name, params) => {
            const cleanParams = params.trim();
            const selfParams = cleanParams ? `self, ${cleanParams}` : 'self';
            return `    def ${name}(self, ${cleanParams ? cleanParams : ''})`;
          }
        );
      }
      return line ? `    ${line}` : '';
    });
    return `class Solution:\n${newLines.join('\n')}`;
  }

  if (lang === 'javascript') {
    if (/var\s+\w+\s*=\s*function|class\s+Solution/.test(code)) return code;
    // Convert: function name(params) { → var name = function(params) {
    return code.replace(
      /function\s+(\w+)\s*\(([^)]*)\)\s*\{/,
      (_, name, params) => `var ${name} = function(${params}) {`
    );
  }

  if (lang === 'java') {
    // Java already has class Solution in data.js — ensure it
    if (/class\s+Solution/.test(code)) return code;
    return code;
  }

  if (lang === 'cpp') {
    if (/class\s+Solution/.test(code)) return code;
    return code;
  }

  return code;
}

// ── Extract function/method name and parameter names ─────────────────────────
function extractFuncInfo(code, lang) {
  let m;

  if (lang === 'python') {
    // Class method: def methodName(self, params)
    m = code.match(/def\s+(\w+)\s*\(\s*self\s*,?\s*([^)]*)\)/);
    if (m) {
      const params = m[2].split(',').map(p => p.trim().split(':')[0].split('=')[0].trim()).filter(Boolean);
      return { name: m[1], params, isMethod: true };
    }
    // Plain function: def funcName(params)
    m = code.match(/def\s+(\w+)\s*\(([^)]*)\)/);
    if (m) return { name: m[1], params: m[2].split(',').map(p => p.trim().split(':')[0].trim()).filter(Boolean), isMethod: false };
  }

  if (lang === 'javascript') {
    // var name = function(params)
    m = code.match(/var\s+(\w+)\s*=\s*function\s*\(([^)]*)\)/);
    if (m) return { name: m[1], params: m[2].split(',').map(p => p.trim()).filter(Boolean), isMethod: false };
    // Regular function
    m = code.match(/function\s+(\w+)\s*\(([^)]*)\)/);
    if (m) return { name: m[1], params: m[2].split(',').map(p => p.trim()).filter(Boolean), isMethod: false };
  }

  if (lang === 'java') {
    m = code.match(/public\s+\S+\s+(\w+)\s*\(([^)]*)\)/);
    if (m) {
      const params = m[2].split(',').map(p => p.trim().split(/\s+/).pop()).filter(Boolean);
      return { name: m[1], params, isMethod: true };
    }
  }

  if (lang === 'cpp') {
    m = code.match(/\b(\w+)\s*\([^)]*\)\s*\{/);
    if (m && !['if','for','while','switch','main'].includes(m[1]))
      return { name: m[1], params: [], isMethod: true };
  }

  return { name: '', params: [] };
}

// ── Build self-contained runnable test harness ────────────────────────────────
function buildHarness(userCode, lang, funcInfo, argsMap) {
  const { name, params, isMethod } = funcInfo;
  const vals = params.length ? params.map(p => argsMap[p] ?? argsMap[Object.keys(argsMap)[params.indexOf(p)]]) : Object.values(argsMap);

  if (lang === 'python') {
    const argsStr = vals.map(v => JSON.stringify(v)).join(', ');
    const caller = isMethod
      ? `sol = Solution()\n    __r = sol.${name}(${argsStr})`
      : `__r = ${name}(${argsStr})`;
    return `${userCode}\nimport json as _j\ntry:\n    ${caller}\n    if isinstance(__r, (list, dict)):\n        print(_j.dumps(__r))\n    elif __r is not None:\n        print(__r)\n    else:\n        print('None')\nexcept Exception as e:\n    print('Error:', e)`;
  }

  if (lang === 'javascript') {
    const argsStr = vals.map(v => JSON.stringify(v)).join(', ');
    return `${userCode}\ntry {\n  const __r = ${name}(${argsStr});\n  if (Array.isArray(__r)) console.log(JSON.stringify(__r));\n  else if (__r !== undefined) console.log(String(__r));\n} catch(e) { console.error('Error: ' + e.message); }`;
  }

  if (lang === 'java') {
    const setup = params.map((p, i) => {
      const v = vals[i];
      if (Array.isArray(v)) return `int[] ${p} = {${v.join(',')}};`;
      if (typeof v === 'string') return `String ${p} = "${v}";`;
      return `int ${p} = ${v};`;
    }).join('\n        ');
    const firstParam = params[0] ?? 'null';
    return `import java.util.*;\n${userCode}\nclass Main {\n    public static void main(String[] a) {\n        Solution sol = new Solution();\n        ${setup}\n        try {\n            Object __r = sol.${name}(${params.join(', ')});\n            if (__r instanceof int[]) System.out.println(Arrays.toString((int[])__r));\n            else if (__r != null) System.out.println(__r);\n            else System.out.println(Arrays.toString(${firstParam}));\n        } catch(Exception e) { System.out.println("Error: " + e.getMessage()); }\n    }\n}`;
  }

  if (lang === 'cpp') {
    const setup = params.map((p, i) => {
      const v = vals[i];
      return Array.isArray(v) ? `vector<int> ${p} = {${v.join(',')}};`
           : typeof v === 'string' ? `string ${p} = "${v}";`
           : `int ${p} = ${v};`;
    }).join('\n    ');
    const firstParam = params[0] ?? '';
    const printBlock = firstParam
      ? `cout << "[";\n    for(size_t _i=0;_i<${firstParam}.size();_i++){if(_i)cout<<",";cout<<${firstParam}[_i];}\n    cout << "]" << endl;`
      : `cout << sol.${name}(${params.join(', ')}) << endl;`;
    return `#include<bits/stdc++.h>\nusing namespace std;\n${userCode}\nint main(){\n    Solution sol;\n    ${setup}\n    sol.${name}(${params.join(', ')});\n    ${printBlock}\n    return 0;\n}`;
  }

  return userCode;
}

function normalise(s) {
  return s.trim().replace(/\s+/g,'').replace(/True/g,'true').replace(/False/g,'false').toLowerCase();
}
function stripExpl(s) { return s.replace(/\s*\(.*\)\s*/g,'').trim(); }
function outputMatches(raw, expected) {
  if (normalise(raw) === normalise(stripExpl(expected))) return true;
  try {
    const a = JSON.parse(raw.trim()), b = JSON.parse(stripExpl(expected));
    if (Array.isArray(a) && Array.isArray(b))
      return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
  } catch {}
  return false;
}

function getFilename(lang) {
  return { javascript:'solution.js', python:'solution.py', java:'Solution.java', cpp:'solution.cpp' }[lang] ?? 'solution.txt';
}

// ── runCode & analyzeWithGroq imported from ./api.js ─────────────────────────
// All backend calls use VITE_API_URL (set in .env or Render env vars)

// ── Component ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activePattern, setActivePattern]   = useState(dummyPatterns[0]?.id);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [activeCase, setActiveCase]         = useState(0);
  const [sidebarOpen, setSidebarOpen]       = useState(true);
  const [bottomTab, setBottomTab]           = useState('testcase');
  const [isAnalyzing, setIsAnalyzing]       = useState(false);
  const [showSubmissions, setShowSubmissions] = useState(false);

  // Profile State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    
    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileMenu]);

  const [userProfile, setUserProfile] = useState({
    name: 'Shravan',
    username: 'shravcoder',
    email: 'shrav@example.com',
    avatar: ANIME_AVATARS[0].url
  });

  // Panel sizes
  const [leftWidth, setLeftWidth]       = useState(42); // % of workspace
  const [bottomHeight, setBottomHeight] = useState(260); // px
  const isDraggingH = useRef(false);
  const isDraggingV = useRef(false);
  const workspaceRef = useRef(null);
  const editorPanelRef = useRef(null);

  const startDragH = useCallback(e => {
    e.preventDefault();
    isDraggingH.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    const onMove = ev => {
      if (!isDraggingH.current || !workspaceRef.current) return;
      const rect = workspaceRef.current.getBoundingClientRect();
      const pct  = ((ev.clientX - rect.left) / rect.width) * 100;
      setLeftWidth(Math.min(65, Math.max(20, pct)));
    };
    const onUp = () => {
      isDraggingH.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, []);

  const startDragV = useCallback(e => {
    e.preventDefault();
    isDraggingV.current = true;
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
    const onMove = ev => {
      if (!isDraggingV.current || !editorPanelRef.current) return;
      const rect = editorPanelRef.current.getBoundingClientRect();
      const fromBottom = rect.bottom - ev.clientY;
      setBottomHeight(Math.min(500, Math.max(120, fromBottom)));
    };
    const onUp = () => {
      isDraggingV.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, []);

  // Code persisted per question+language
  const [codeMap, setCodeMap] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa-code-map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('dsa-code-map', JSON.stringify(codeMap));
  }, [codeMap]);
  const [language, setLanguage] = useState('python');

  // Track completed questions
  const [completedQuestions, setCompletedQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa-completed');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('dsa-completed', JSON.stringify(completedQuestions));
  }, [completedQuestions]);

  // Execution
  const [isRunning,    setIsRunning]    = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runOutput,    setRunOutput]    = useState('');
  const [runError,     setRunError]     = useState(false);
  const [testResults,  setTestResults]  = useState(null);
  const [aiAnalysis,   setAiAnalysis]   = useState(null);

  // Timer
  const [timerTime, setTimerTime] = useState(0);
  const [timerOn,   setTimerOn]   = useState(false);
  useEffect(() => {
    if (!timerOn) return;
    const id = setInterval(() => setTimerTime(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [timerOn]);
  const fmt = s => [Math.floor(s/3600), Math.floor((s%3600)/60), s%60].map(n => String(n).padStart(2,'0')).join(':');

  const activeQuestion = dummyPatterns.flatMap(p => p.questions).find(q => q.id === activeQuestionId);
  const codeKey  = (qid, lang) => `${qid}__${lang}`;
  const getCode  = () => codeMap[codeKey(activeQuestionId, language)] ?? '';
  const setCode  = val => setCodeMap(prev => ({ ...prev, [codeKey(activeQuestionId, language)]: val }));

  const handleQuestionSelect = q => {
    setActiveQuestionId(q.id);
    setActiveCase(0);
    setTestResults(null);
    setAiAnalysis(null);
    setRunOutput('');
    setRunError(false);
    setBottomTab('testcase');
    setTimerOn(false); setTimerTime(0);
    setCodeMap(prev => {
      const key = codeKey(q.id, language);
      if (prev[key] !== undefined) return prev;
      const raw = q.starterCode[language] ?? '';
      return { ...prev, [key]: wrapInClassStyle(raw, language) };
    });
  };

  const handleLangChange = e => {
    const l = e.target.value;
    setLanguage(l);
    setTestResults(null); setAiAnalysis(null); setRunOutput('');
    if (activeQuestion)
      setCodeMap(prev => {
        const key = codeKey(activeQuestionId, l);
        if (prev[key] !== undefined) return prev;
        const raw = activeQuestion.starterCode[l] ?? '';
        return { ...prev, [key]: wrapInClassStyle(raw, l) };
      });
  };

  // ── Code Execution & AI Analysis ─────────────────────────────────────────────
  const executeCode = async (isSubmit = false) => {
    const code = getCode(); if (!code.trim() || !activeQuestion) return;
    if (isSubmit) setIsSubmitting(true); else setIsRunning(true);
    setRunOutput(''); setRunError(false); setTestResults(null); setAiAnalysis(null); 
    setBottomTab(isSubmit ? 'accuracy' : 'result');

    const funcInfo = extractFuncInfo(code, language);
    const results  = [];

    for (const tc of activeQuestion.testCases) {
      const argsMap    = parseTestArgs(tc.input);
      const harnessed  = funcInfo.name ? buildHarness(code, language, funcInfo, argsMap) : code;
      try {
        const r = await runCode(language, getFilename(language), harnessed);
        if (r.compile?.code !== 0) { results.push({ ...tc, actual: (r.compile.stderr ?? 'Compile error').split('\n')[0], pass: false }); continue; }
        const actual = r.run?.output?.trim() ?? '';
        results.push({ ...tc, actual, pass: outputMatches(actual, tc.expected) });
      } catch(e) { results.push({ ...tc, actual: e.message, pass: false }); }
    }

    setTestResults(results);
    const allPassed = results.every(r => r.pass);

    // If Submit and all passed, mark as complete
    if (isSubmit && allPassed) {
      setCompletedQuestions(prev => Array.from(new Set([...prev, activeQuestion.id])));
    }

    // Run AI analysis on both Run and Submit
    setRunOutput('🤖 Analysing with AI…');
    setIsAnalyzing(true);
    const ai = await analyzeWithGroq(activeQuestion, code, language, results);
    setAiAnalysis(ai);
    setIsAnalyzing(false);
    setRunOutput('');

    if (isSubmit) setIsSubmitting(false); else setIsRunning(false);
  };

  const handleRun = () => executeCode(false);
  const handleSubmit = () => executeCode(true);

  // ── Editor Auto-Indentation ──


  // ── Render ────────────────────────────────────────────────────────────────────
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
  };

  if (!isLoggedIn) {
    return <Auth onLogin={(user) => {
      setUserProfile(user);
      setIsLoggedIn(true);
    }} />;
  }

  const currentTestCase = activeQuestion?.testCases?.[activeCase];
  const inputFields     = currentTestCase ? parseInputFields(currentTestCase.input) : [];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <Terminal className="brand-icon" size={26} />
          <span>DSAMaster</span>
        </div>
        
        <div className="navbar-right">
          {/* Submissions Button */}
          <button
            className="submissions-nav-btn"
            onClick={() => setShowSubmissions(true)}
            title="My Submissions"
          >
            <Trophy size={16} />
            <span>Submissions</span>
            {completedQuestions.length > 0 && (
              <span className="submissions-count">{completedQuestions.length}</span>
            )}
          </button>

          <div className="profile-wrapper" ref={profileRef}>
            <img 
              src={userProfile.avatar} 
              alt="Profile" 
              className="nav-avatar" 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=P&background=random&color=fff`; }}
            />
            
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <img src={userProfile.avatar} alt="Profile" className="profile-header-avatar" onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=P&background=random&color=fff`; }} />
                  <div className="profile-info">
                    <div className="profile-name">{userProfile.name}</div>
                    <div className="profile-username">@{userProfile.username}</div>
                    <div className="profile-email">{userProfile.email}</div>
                  </div>
                </div>
                
                <div className="avatar-selection">
                  <div className="avatar-title">Choose Avatar</div>
                  <div className="avatar-grid">
                    {ANIME_AVATARS.map(avatar => (
                      <img
                        key={avatar.id}
                        src={avatar.url}
                        alt={avatar.name}
                        title={avatar.name}
                        className={`avatar-option ${userProfile.avatar === avatar.url ? 'selected' : ''}`}
                        onClick={() => {
                          setUserProfile({...userProfile, avatar: avatar.url});
                          
                          // Update localStorage with new avatar
                          const users = JSON.parse(localStorage.getItem('dsa-users') || '[]');
                          const userIndex = users.findIndex(u => u.username === userProfile.username);
                          if (userIndex !== -1) {
                            users[userIndex].avatar = avatar.url;
                            localStorage.setItem('dsa-users', JSON.stringify(users));
                          }
                        }}
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(avatar.name)}&background=random&color=fff&bold=true`; }}
                      />
                    ))}
                  </div>
                  
                  <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleLogout}>
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Submissions Modal */}
      {showSubmissions && (
        <div className="onboarding-overlay" onClick={() => setShowSubmissions(false)}>
          <div className="submissions-modal" onClick={e => e.stopPropagation()}>
            <div className="submissions-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Trophy size={20} color="var(--accent-color)" />
                <h2 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-primary)' }}>My Submissions</h2>
              </div>
              <button className="sidebar-close-btn" onClick={() => setShowSubmissions(false)}>✕</button>
            </div>
            <div className="submissions-stats">
              <div className="stat-pill">
                <span className="stat-num">{completedQuestions.length}</span>
                <span className="stat-label">Solved</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">{dummyPatterns.flatMap(p => p.questions).length}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">
                  {dummyPatterns.flatMap(p => p.questions).length > 0
                    ? Math.round((completedQuestions.length / dummyPatterns.flatMap(p => p.questions).length) * 100)
                    : 0}%
                </span>
                <span className="stat-label">Progress</span>
              </div>
            </div>
            <div className="submissions-list">
              {dummyPatterns.map(pattern => (
                <div key={pattern.id} className="sub-pattern-group">
                  <div className="sub-pattern-title">{pattern.name}</div>
                  {pattern.questions.map(q => (
                    <div
                      key={q.id}
                      className={`sub-question-row ${completedQuestions.includes(q.id) ? 'sub-solved' : ''}`}
                      onClick={() => { handleQuestionSelect(q); setShowSubmissions(false); }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        {completedQuestions.includes(q.id)
                          ? <CheckCircle2 size={16} color="var(--accent-color)" />
                          : <div className="sub-empty-circle" />}
                        <span>{q.title}</span>
                      </div>
                      <span className={`difficulty-badge difficulty-${q.difficulty}`}>{q.difficulty}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="main-content">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="sidebar-header">
            <span>Practice Patterns</span>
            <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)} title="Hide sidebar">
              ✕
            </button>
          </div>
          <div className="patterns-list">
            {dummyPatterns.map(pattern => (
              <div key={pattern.id} className="pattern-group">
                <div className="pattern-title"
                  onClick={() => setActivePattern(activePattern === pattern.id ? null : pattern.id)}>
                  <span>{pattern.name}</span>
                  {activePattern === pattern.id ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}
                </div>
                {activePattern === pattern.id && (
                  <div className="question-list">
                    {pattern.questions.map(q => (
                      <div key={q.id}
                        className={`question-item ${activeQuestionId === q.id ? 'active' : ''}`}
                        onClick={() => handleQuestionSelect(q)}>
                        <span style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                          {completedQuestions.includes(q.id) && <CheckCircle2 size={14} color="#2cbb5d" />}
                          {q.title}
                        </span>
                        <span className={`difficulty-badge difficulty-${q.difficulty}`}>{q.difficulty}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer Buttons */}
          <div className="sidebar-footer">
            <button
              className="sidebar-footer-btn submissions-btn"
              onClick={() => setShowSubmissions(true)}
            >
              <List size={15} /> Submissions ({completedQuestions.length})
            </button>
            <button
              className="sidebar-footer-btn reset-btn"
              onClick={() => {
                if (window.confirm('Reset all progress? This cannot be undone.')) {
                  setCompletedQuestions([]);
                  localStorage.removeItem('dsa-completed');
                }
              }}
            >
              <RotateCcw size={14} /> Reset Progress
            </button>
          </div>
        </aside>

        {/* Mini level-strip — visible when sidebar is closed */}
        {!sidebarOpen && (
          <div className="mini-sidebar">
            <button
              className="mini-sidebar-open"
              onClick={() => setSidebarOpen(true)}
              title="Open sidebar"
            >
              ☰
            </button>
            {dummyPatterns.map((pattern, i) => (
              <button
                key={pattern.id}
                className={`mini-level-btn ${activePattern === pattern.id ? 'mini-active' : ''}`}
                onClick={() => {
                  setSidebarOpen(true);
                  setActivePattern(pattern.id);
                }}
                title={pattern.name}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {activeQuestion ? (
          <div className="workspace" ref={workspaceRef}>
            {/* ── Left: Problem Description ── */}
            <div className="problem-description" style={{ width: `${leftWidth}%`, flexShrink: 0 }}>
              <div className="problem-header">
                <h1 className="problem-title">{activeQuestion.title}</h1>
                <div className="problem-meta">
                  <span className={`difficulty-badge difficulty-${activeQuestion.difficulty}`}>{activeQuestion.difficulty}</span>
                </div>
              </div>
              <div className="problem-body">{activeQuestion.description}</div>

              {/* Examples from test cases */}
              {activeQuestion.testCases?.map((tc, i) => (
                <div key={i} className="example-block">
                  <div className="example-title">Example {i+1}:</div>
                  <div className="example-line"><strong>Input:</strong> <code>{tc.input}</code></div>
                  <div className="example-line"><strong>Output:</strong> <code>{tc.expected}</code></div>
                </div>
              ))}
            </div>

            {/* ── Horizontal Resize Handle ── */}
            <div className="resizer resizer-h" onMouseDown={startDragH} />

            {/* ── Right: Editor + Bottom Panel ── */}
            <div className="editor-panel" ref={editorPanelRef}
              style={{ width: `${100 - leftWidth}%`, flexShrink: 0 }}>
              {/* Editor Header */}
              <div className="editor-header">
                <div className="editor-controls-left">
                  <select className="lang-select" value={language} onChange={handleLangChange}>
                    <option value="python">Python 3</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                  <div className="stopwatch">
                    <span>{fmt(timerTime)}</span>
                    <button className="timer-toggle" onClick={() => setTimerOn(t => !t)}>
                      {timerOn ? <PauseCircle size={15}/> : <PlayCircle size={15}/>}
                    </button>
                    <button className="timer-reset" onClick={() => { setTimerOn(false); setTimerTime(0); }}>
                      <RotateCcw size={13}/>
                    </button>
                  </div>
                </div>
                <div className="editor-actions">
                  <button className="btn btn-secondary" onClick={handleRun} disabled={isRunning || isSubmitting}>
                    <Play size={14}/> {isRunning ? 'Running…' : 'Run Code'}
                  </button>
                  <button className="btn btn-primary" onClick={handleSubmit} disabled={isRunning || isSubmitting}>
                    <CheckCircle2 size={14}/> {isSubmitting ? 'Checking…' : 'Submit'}
                  </button>
                </div>
              </div>

              {/* Code Area */}
              <div className="code-area-wrapper">
                <Editor
                  height="100%"
                  language={language}
                  theme="vs-dark"
                  value={getCode()}
                  onChange={val => setCode(val || '')}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    renderIndentGuides: true,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    padding: { top: 16 }
                  }}
                />
              </div>

              {/* ── Vertical Resize Handle ── */}
              <div className="resizer resizer-v" onMouseDown={startDragV} />

              {/* ── Bottom Panel (LeetCode-style) ── */}
              <div className="bottom-panel" style={{ height: bottomHeight }}>
                <div className="bottom-tabs">
                  <button className={`bottom-tab ${bottomTab==='testcase'?'active':''}`} onClick={()=>setBottomTab('testcase')}>
                    Testcase
                  </button>
                  <button className={`bottom-tab ${bottomTab==='result'?'active':''}`} onClick={()=>setBottomTab('result')}>
                    Test Result
                  </button>
                  <button className={`bottom-tab ${bottomTab==='accuracy'?'active':''}`} onClick={()=>setBottomTab('accuracy')}>
                    Accuracy
                  </button>
                </div>

                {/* Testcase Tab */}
                {bottomTab === 'testcase' && (
                  <div className="bottom-content">
                    <div className="case-tabs">
                      {activeQuestion.testCases?.map((_, i) => (
                        <button key={i}
                          className={`case-tab ${activeCase===i?'active':''}${testResults?testResults[i]?.pass?' tab-pass':' tab-fail':''}`}
                          onClick={() => setActiveCase(i)}>
                          {testResults && (testResults[i]?.pass
                            ? <CheckCircle2 size={11} style={{marginRight:3}}/>
                            : <XCircle size={11} style={{marginRight:3}}/>)}
                          Case {i+1}
                        </button>
                      ))}
                    </div>
                    <div className="tc-fields">
                      {inputFields.map(({key, raw}, i) => (
                        <div key={i} className="tc-field">
                          <div className="tc-field-label">{key} =</div>
                          <div className="tc-field-value">{raw}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Test Result Tab */}
                {bottomTab === 'result' && (
                  <div className="bottom-content">
                    {/* Test case results layout from LeetCode */}
                    {testResults && (
                      <div className="lc-result-container">
                        <div className="lc-verdict-header">
                          {testResults.every(r=>r.pass) ? (
                            <h2 className="lc-accepted">Accepted</h2>
                          ) : (
                            <h2 className="lc-wrong">
                              {testResults.some(r => r.actual?.toLowerCase().includes('compile error')) 
                                ? 'Compilation Error' 
                                : testResults.some(r => r.actual?.toLowerCase().includes('error')) 
                                  ? 'Runtime Error' 
                                  : testResults.some(r => r.actual?.toLowerCase().includes('timeout') || r.actual?.toLowerCase().includes('abort'))
                                    ? 'Time Limit Exceeded'
                                    : 'Wrong Answer'}
                            </h2>
                          )}
                          <span className="lc-runtime">Runtime: 0 ms</span>
                        </div>

                        <div className="case-tabs">
                          {testResults.map((r,i) => (
                            <button key={i}
                              className={`case-tab ${activeCase===i?'active':''} ${r.pass?'tab-pass':'tab-fail'}`}
                              onClick={()=>setActiveCase(i)}>
                              {r.pass ? <CheckCircle2 size={13} style={{marginRight:5, color:'#2cbb5d'}}/> : <XCircle size={13} style={{marginRight:5, color:'#ef4743'}}/>}
                              Case {i+1}
                            </button>
                          ))}
                        </div>

                        {testResults[activeCase] && (
                          <div className="lc-case-details">
                            <div className="lc-detail-group">
                              <div className="lc-detail-label">Input</div>
                              {parseInputFields(testResults[activeCase].input).map(({key, raw}, idx) => (
                                <div key={idx} className="lc-detail-box">
                                  <div className="lc-detail-var">{key} =</div>
                                  <div className="lc-detail-val">{raw}</div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="lc-detail-group">
                              <div className="lc-detail-label">Output</div>
                              <div className="lc-detail-box">
                                <div className="lc-detail-val">{testResults[activeCase].actual || '(no output)'}</div>
                              </div>
                            </div>
                            
                            <div className="lc-detail-group">
                              <div className="lc-detail-label">Expected</div>
                              <div className="lc-detail-box">
                                <div className="lc-detail-val">{testResults[activeCase].expected}</div>
                              </div>
                            </div>
                            
                            {/* Code Quality Box (Directly Under Expected) */}
                            {aiAnalysis?.codeQuality && (
                              <div className="code-quality-box">
                                <div className="cq-header"><Zap size={14}/> Code Quality Assessment</div>
                                <div className="cq-list">
                                  {aiAnalysis.codeQuality.map((cq, i) => (
                                    <div key={i} className="cq-item">
                                      <div className="cq-metric">
                                        <strong>{cq.metric}</strong>
                                        <span className={`cq-status ${cq.status.toLowerCase()}`}>{cq.status}</span>
                                      </div>
                                      <div className="cq-feedback">{cq.feedback}</div>
                                      {cq.suggestion && (
                                        <div className="cq-suggestion">
                                          <span style={{color: 'var(--accent-color)'}}>💡 Suggestion:</span> {cq.suggestion}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Run output */}
                    {runOutput && !runOutput.startsWith('🤖') && (
                      <div className={`console-out ${runError ? 'console-error' : runOutput !== '⏳ Running…' ? 'console-success' : ''}`}>
                        <div className="console-label"><Monitor size={13}/> Console</div>
                        <pre>{runOutput}</pre>
                      </div>
                    )}

                    {/* AI Loading State */}
                    {isAnalyzing && (
                      <div className="ai-card" style={{opacity: 0.7, justifyContent: 'center', alignItems: 'center', minHeight: '100px'}}>
                        <div style={{display:'flex', gap:'0.5rem', alignItems:'center', color:'var(--accent-color)'}}>
                          <Zap size={18} className="spin-animation" /> AI is analyzing your code...
                        </div>
                      </div>
                    )}

                    {!testResults && !runOutput && (
                      <div className="result-empty">Run or Submit your code to see results here.</div>
                    )}
                  </div>
                )}

                {/* Accuracy Tab */}
                {bottomTab === 'accuracy' && (
                  <div className="bottom-content">
                    {isAnalyzing ? (
                      <div className="ai-card" style={{opacity: 0.7, justifyContent: 'center', alignItems: 'center', minHeight: '100px'}}>
                        <div style={{display:'flex', gap:'0.5rem', alignItems:'center', color:'var(--accent-color)'}}>
                          <Zap size={18} className="spin-animation" /> AI is analyzing your code...
                        </div>
                      </div>
                    ) : aiAnalysis ? (
                      <div className="ai-card">
                        <div className="ai-card-top">
                          <div className="accuracy-ring">
                            <svg viewBox="0 0 64 64" className="ring-svg">
                              <circle cx="32" cy="32" r="26" className="ring-bg"/>
                              <circle cx="32" cy="32" r="26" className="ring-fill"
                                style={{ strokeDashoffset: 163.4 - (163.4 * aiAnalysis.accuracy / 100) }}/>
                            </svg>
                            <span className="accuracy-pct">{aiAnalysis.accuracy}%</span>
                          </div>
                          <div className="ai-summary">
                            <div className="ai-summary-title"><Zap size={14}/> Accuracy & Overview</div>
                            <p>{aiAnalysis.summary}</p>
                          </div>
                        </div>
                        <div className="ai-details">
                          <div className="ai-detail ai-good" style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
                            <strong>✅ What is Right</strong>
                            <span>{aiAnalysis.whatIsRight || aiAnalysis.strength}</span>
                          </div>
                          {aiAnalysis.whatIsWrong && (
                            <div className="ai-detail ai-bad" style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
                              <strong>❌ What is Wrong</strong>
                              <span>{aiAnalysis.whatIsWrong || aiAnalysis.improvement}</span>
                            </div>
                          )}
                          {aiAnalysis.howToSolve && (
                            <div className="ai-detail ai-info" style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
                              <strong>💡 How to Solve</strong>
                              <span>{aiAnalysis.howToSolve}</span>
                            </div>
                          )}
                          <div className="ai-detail" style={{background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                            <strong>⏱ Complexity:</strong>
                            <span>{aiAnalysis.complexity}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="result-empty">Run your code successfully to see AI Accuracy metrics.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <Code2 size={60} style={{opacity:0.4,marginBottom:'1rem'}}/>
            <h2>Welcome to DSAMaster</h2>
            <p>Select a level and question from the sidebar to start practising.</p>
          </div>
        )}
      </main>
    </div>
  );
}
