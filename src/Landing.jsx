import React from 'react';

export default function Landing({ onNavigate }) {
  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="landing-brand">
          <img src="/favicon.svg" alt="CodeKai Logo" className="brand-icon" style={{ width: 36, height: 36 }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'normal', color: 'var(--text-primary)' }}>CodeKai</span>
        </div>
        <div className="landing-nav-buttons">
          <button className="landing-btn-login" onClick={() => onNavigate('login')}>Login</button>
          <button className="landing-btn-signup" onClick={() => onNavigate('signup')}>Sign Up</button>
        </div>
      </nav>
      
      <div className="landing-content">
        <div className="landing-text-box">
          <h1 className="landing-slogan-en">
            Awaken the Dragon Within.<br />
            Turn Every Bug into a Victory.
          </h1>
          <p className="landing-slogan-jp">
            内なる龍を目覚めさせ、すべてのバグを勝利へ変えろ。
          </p>
          <button className="landing-cta" onClick={() => onNavigate('signup')}>
            Start Your Journey
          </button>
        </div>

        <div className="landing-vertical-container">
          <div className="vertical-text-jp">
            戦わなければ　勝てない。
          </div>
          <div className="vertical-text-en">
            If you don't fight, you can't win.
          </div>
        </div>
      </div>
    </div>
  );
}
