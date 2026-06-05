import React, { useState } from 'react';
import { Terminal, Mail, Lock, User, UserPlus, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Bypassing all validation for now to allow instant login/signup
    const dummyUser = {
      name: formData.username || 'Shravan',
      username: formData.username || 'shravcoder',
      email: formData.email || 'shrav@example.com',
      avatar: '/avatars/gojo.png'
    };
    
    onLogin(dummyUser);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        <div className="auth-logo-container">
          <div className="auth-logo-icon">
            <Terminal size={24} color="var(--bg-main)" />
          </div>
        </div>
        
        <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="auth-subtitle">
          {isLogin ? 'Sign in to securely access your workspace.' : 'Join DSAMaster and level up your coding skills.'}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="" 
                value={formData.username} 
                onChange={handleChange} 
              />
            </div>
          )}

          {isLogin && (
            <div className="input-group">
              <label>Username or Email</label>
              <input 
                type="text" 
                name="username" 
                placeholder="" 
                value={formData.username} 
                onChange={handleChange} 
              />
            </div>
          )}

          {!isLogin && (
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
          )}

          <div className="input-group">
            <label>{isLogin ? 'Password' : 'New Password'}</label>
            <input 
              type="password" 
              name="password" 
              placeholder="" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Re-write Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <span>Forgot password?</span>
            </div>
          )}

          <button type="submit" className="btn-primary-auth">
            {isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => { setIsLogin(false); setError(''); }}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => { setIsLogin(true); setError(''); }}>Log in</span></p>
          )}
        </div>
        
      </div>
    </div>
  );
}
