import React, { useState, useEffect } from 'react';
import { collection, getCountFromServer, doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export default function Landing({ onNavigate }) {
  const [stats, setStats] = useState({ users: 0, solved: 0 });

  useEffect(() => {
    // get users count
    const fetchUsers = async () => {
      try {
        const coll = collection(db, 'users');
        const snap = await getCountFromServer(coll);
        setStats(s => ({ ...s, users: snap.data().count }));
      } catch (err) { console.error(err); }
    };
    fetchUsers();

    // get global solved count
    const unsub = onSnapshot(doc(db, 'stats', 'global'), (docSnap) => {
      if (docSnap.exists()) {
        setStats(s => ({ ...s, solved: docSnap.data().totalSolved || 0 }));
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="landing-brand">
          <img src="/favicon.svg" alt="CodeKai Logo" className="brand-icon" style={{ width: 36, height: 36 }} />
          <span style={{ fontFamily: 'var(--font-ninja)', fontSize: '1.5rem', fontWeight: 'normal', color: 'var(--text-primary)' }}>CodeKai</span>
        </div>
        <div className="landing-nav-links">
          <a onClick={() => document.getElementById('stats-section').scrollIntoView({ behavior: 'smooth' })}>Ninjas Joined</a>
          <a onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}>Why CodeKai</a>
          <a onClick={() => document.getElementById('connect-section').scrollIntoView({ behavior: 'smooth' })}>Let<span style={{ fontFamily: 'var(--font-sans)' }}>'</span>s Connect</a>
        </div>
        <div className="landing-nav-buttons">
          <button className="landing-btn-login" onClick={() => onNavigate('login')}>Login</button>
          <button className="landing-btn-signup" onClick={() => onNavigate('signup')}>Sign Up</button>
        </div>
      </nav>
      
      <div className="landing-content">
        <div className="landing-text-box">
          <h1 className="landing-slogan-en">
            <span className="slide-down-item" style={{ animationDelay: '0.1s' }}>Awaken the Dragon Within.</span>
            <span className="slide-down-item" style={{ animationDelay: '0.2s' }}>Turn Every Bug into a Victory.</span>
          </h1>
          <p className="landing-slogan-jp slide-down-item" style={{ animationDelay: '0.3s' }}>
            内なる龍を目覚めさせ、すべてのバグを勝利へ変えろ。
          </p>
          <div className="slide-down-item" style={{ animationDelay: '0.4s' }}>
            <button className="landing-cta" onClick={() => onNavigate('signup')}>
              Start Your Journey
            </button>
          </div>
        </div>

        <div className="landing-vertical-container">
          <div className="vertical-text-jp slide-right-item" style={{ animationDelay: '0.5s' }}>
            戦わなければ　勝てない。
          </div>
          <div className="vertical-text-en slide-right-item" style={{ animationDelay: '0.7s' }}>
            If you don't fight, you can't win.
          </div>
        </div>
      </div>

      {/* New Stats Section */}
      <div id="stats-section" className="landing-stats-section">
        <div className="stat-card">
          <h3>{stats.users}</h3>
          <p>Ninjas Joined</p>
        </div>
        <div className="stat-card">
          <h3>{stats.solved}</h3>
          <p>Questions Solved</p>
        </div>
      </div>

      {/* New Features/Why Section */}
      <div id="features-section" className="landing-features-section">
        <h2 className="features-title">Why CodeKai?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Pattern Based Learning</h4>
            <p>We provide DSA structured in intuitive patterns. Stop memorizing, start understanding. Master the underlying logic to easily solve any variation you face in interviews.</p>
          </div>
          <div className="feature-card">
            <h4>AI Accuracy Check</h4>
            <p>Our advanced AI analyzes your solution's correctness and approach, giving you instant, precise feedback on exactly what went wrong and how to fix it.</p>
          </div>
          <div className="feature-card">
            <h4>Code Quality Insights</h4>
            <p>Writing working code isn't enough. Our AI grades your code quality, complexity, and styling, teaching you to write production-ready code like a senior engineer.</p>
          </div>
        </div>
      </div>

      {/* New Let's Connect Section */}
      <div id="connect-section" className="landing-connect-section">
        <h2 className="connect-title">Let<span style={{ fontFamily: 'var(--font-sans)' }}>'</span>s Connect</h2>
        <p className="connect-text">
          Let<span style={{ fontFamily: 'var(--font-sans)' }}>'</span>s see how many future problem solvers are out there.<br />
          <span style={{ color: '#ff6b6b' }}>Connect with the creator.</span>
        </p>
        <div className="connect-buttons">
          <a href="https://www.linkedin.com/in/shravanidalvi26" target="_blank" rel="noopener noreferrer" className="connect-btn linkedin-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://x.com/shravanietc" target="_blank" rel="noopener noreferrer" className="connect-btn twitter-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="landing-footer">
        <div className="landing-brand footer-brand">
          <img src="/favicon.svg" alt="CodeKai Logo" className="brand-icon" style={{ width: 28, height: 28 }} />
          <span style={{ fontFamily: 'var(--font-ninja)', fontSize: '1.2rem', fontWeight: 'normal', color: 'var(--text-primary)' }}>CodeKai</span>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CodeKai. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
