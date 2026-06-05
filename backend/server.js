require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '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',
});

// Wandbox Compilers
const WANDBOX_COMPILERS = {
  javascript: 'nodejs-20.17.0',
  python:     'cpython-3.14.0',
  java:       'openjdk-jdk-22+36',
  cpp:        'gcc-head',
};

// ── Execute Code Endpoint ──────────────────────────────────────────────────
app.post('/api/execute', async (req, res) => {
  const { lang, code } = req.body;
  const compiler = WANDBOX_COMPILERS[lang];
  
  if (!compiler) {
    return res.status(400).json({ error: `Unsupported language: ${lang}` });
  }

  try {
    const response = await axios.post('https://wandbox.org/api/compile.json', {
      compiler,
      code,
      save: false
    });

    const data = response.data;
    const compileErr = data.compiler_error?.trim() || '';
    const runErr     = data.program_error?.trim() || '';
    const runOut     = data.program_output?.trim() || '';
    const status     = parseInt(data.status, 10); // 0 is success

    if (compileErr) {
      return res.json({ compile: { code: 1, stderr: compileErr }, run: { code: 0, output: '' } });
    }
    
    return res.json({
      compile: { code: 0, stderr: '' },
      run: { code: status !== 0 ? 1 : 0, stderr: runErr, output: runOut || runErr }
    });
  } catch (error) {
    console.error('Execution error:', error.message);
    res.status(500).json({ error: 'Failed to execute code' });
  }
});

// ── AI Analysis Endpoint (Groq) ────────────────────────────────────────────
app.post('/api/analyze', async (req, res) => {
  const { question, code, language, testResults } = req.body;

  const passed = testResults.filter(r => r.pass).length;
  const total  = testResults.length;
  
  const prompt = `You are an expert DSA instructor and code reviewer. Analyze this ${language} solution.

Problem: "${question.title}"
Description: ${question.description.slice(0, 400)}

User's Code:
\`\`\`${language}
${code}
\`\`\`

Test Results: ${passed}/${total} passed
${testResults.map((r,i) => `Case ${i+1}: Input: ${r.input} | Expected: ${r.expected} | Got: ${r.actual || '(no output)'} | ${r.pass ? 'PASS' : 'FAIL'}`).join('\n')}

CRITICAL INSTRUCTIONS:
1. Carefully check if the user's code uses a Brute Force approach (e.g. O(n^2)) instead of Optimal (e.g. HashMaps, Pointers).
2. If it is brute force, decrease the accuracy score (e.g. to 50-70) and strictly suggest using the optimal data structure.
3. Evaluate the code on these specific quality metrics:
   - Choice of approach: Did the candidate recognize a better technique? (e.g., using a hash map instead of nested loops, two pointers instead of extra arrays).
   - Algorithmic thinking: Does the solution show understanding of common patterns? (Sliding window, two pointers, hash map, BFS/DFS, DP, etc.)
   - Code elegance: Is the solution concise without being cryptic? Avoids unnecessary variables and repeated logic.
   - Readability: Clear variable names (left, right, freq) instead of (a, b, x).
   - Logical structure: Well-organized flow, easy to follow the reasoning.
   - Use of appropriate data structures: Choosing a set, dictionary, heap, stack, queue, etc., when they naturally fit the problem.
   - Avoiding redundancy: No duplicated code, no unnecessary loops or conditions.
   - Maintainability: Someone else can understand and modify it later.
   - Idiomatic usage: Uses language features appropriately (e.g., Python dictionary lookups instead of manually searching a list).
   - Scalability of the solution: Even if constraints are small, the approach reflects good engineering judgment.
   Pick the top 3-4 most relevant ones for your feedback.

Respond ONLY with valid JSON (no markdown), exactly this shape:
{
  "accuracy": 85,
  "summary": "One sentence about the solution quality.",
  "whatIsRight": "What the code does correctly.",
  "whatIsWrong": "What the code does incorrectly, or where it fails.",
  "howToSolve": "Specific suggestions on how to fix the wrong parts.",
  "complexity": "Time & Space complexity.",
  "codeQuality": [
    {
      "metric": "Choice of approach", 
      "status": "Needs Improvement", 
      "feedback": "Used nested loops which is O(n^2).",
      "suggestion": "You can change this by using a HashMap to store complements, reducing time to O(n)."
    }
  ]
}`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.2,
      max_tokens: 500,
    });

    const raw = chatCompletion.choices[0]?.message?.content || '';
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      return res.json(JSON.parse(jsonMatch[0]));
    } else {
      throw new Error('No JSON found in response');
    }
  } catch (error) {
    console.error('Groq AI error:', error.message);
    res.status(500).json({ error: 'Failed to analyze code' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
