import React, { useState } from 'react';
import { Terminal, Mail, Lock, User, UserPlus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { auth, googleProvider, db } from './firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  // Onboarding state for Google Auth
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(ANIME_AVATARS[0].url);
  const [onboardingUsername, setOnboardingUsername] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // Helper to save or retrieve user data from Firestore
  const saveUserToFirestore = async (user, fallbackName = null) => {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    let authUser = {
      uid: user.uid,
      name: user.displayName || fallbackName || 'New User',
      username: (user.displayName || fallbackName || user.email.split('@')[0]).replace(/\s+/g, '').toLowerCase(),
      email: user.email,
      avatar: user.photoURL || '/avatars/gojo.png',
      lastLogin: new Date().toISOString()
    };

    if (!userSnap.exists()) {
      // First time logging in or signing up
      authUser.createdAt = new Date().toISOString();
      await setDoc(userRef, authUser);
    } else {
      // User exists, merge existing data (like if they changed their avatar)
      const existingData = userSnap.data();
      authUser = { ...authUser, ...existingData, lastLogin: new Date().toISOString() };
      await setDoc(userRef, authUser, { merge: true });
    }
    
    return authUser;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      let userCredential;
      if (isLogin) {
        if (!formData.username || !formData.password) {
          setError('Please fill in both fields.');
          return;
        }
        // Assuming username field is actually email for Firebase auth
        userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        if (!formData.email || !formData.password) {
          setError('Please fill all required fields');
          return;
        }
        userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        
        // Optional: you could update the profile here with the provided username (displayName)
      }

      const user = userCredential.user;
      
      const authUser = {
        uid: user.uid,
        name: user.displayName || formData.username || 'New User',
        username: (user.displayName || formData.username || user.email.split('@')[0]).replace(/\s+/g, '').toLowerCase(),
        email: user.email,
        avatar: user.photoURL || '/avatars/gojo.png',
      };
      
      // Instantly log in to open the dashboard!
      onLogin(authUser);

      // Save or update user in Firestore in the background
      saveUserToFirestore(user, formData.username).catch(err => console.error('Firestore sync error:', err));

    } catch (err) {
      console.error(err);
      setError(err.message.replace('Firebase: ', ''));
    }
  };

  const handleOnboardingSubmit = async (e) => {
    e.preventDefault();
    if (!onboardingUsername.trim()) {
      setError('Please enter a username');
      return;
    }
    
    const authUser = {
      uid: googleUser.uid,
      name: googleUser.displayName || 'Google User',
      username: onboardingUsername.replace(/\s+/g, '').toLowerCase(),
      email: googleUser.email,
      avatar: selectedAvatar,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };
    
    // Save to Firestore and log in instantly
    const userRef = doc(db, 'users', googleUser.uid);
    setDoc(userRef, authUser).catch(err => console.error(err));
    
    onLogin(authUser);
  };

  // (onboarding rendered inline below)

  return (
    <div className="auth-wrapper">
      {showOnboarding && (
        <div className="onboarding-overlay">
          <div className="onboarding-modal">
            <div className="onboarding-header">
              <div className="onboarding-icon">
                <User size={22} color="var(--bg-main)" />
              </div>
              <div>
                <h3 className="onboarding-title">Almost there!</h3>
                <p className="onboarding-subtitle">Set up your profile to get started</p>
              </div>
            </div>

            {error && <div className="auth-error" style={{ marginBottom: '1rem' }}>{error}</div>}

            <form onSubmit={handleOnboardingSubmit}>
              <div className="input-group" style={{ marginBottom: '1.2rem' }}>
                <label>Choose a Username</label>
                <input
                  type="text"
                  value={onboardingUsername}
                  onChange={e => { setOnboardingUsername(e.target.value); setError(''); }}
                  placeholder="e.g. ninja_coder"
                  autoFocus
                />
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '0.8rem' }}>
                  Select Your Avatar
                </label>
                <div className="avatar-grid">
                  {ANIME_AVATARS.map(avatar => (
                    <img
                      key={avatar.id}
                      src={avatar.url}
                      alt={avatar.name}
                      title={avatar.name}
                      className={`avatar-option ${selectedAvatar === avatar.url ? 'selected' : ''}`}
                      onClick={() => setSelectedAvatar(avatar.url)}
                      style={{
                        cursor: 'pointer',
                        border: selectedAvatar === avatar.url
                          ? '3px solid var(--accent-color)'
                          : '3px solid transparent',
                        boxShadow: selectedAvatar === avatar.url
                          ? '0 0 12px var(--accent-glow)'
                          : 'none',
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary-auth" style={{ marginTop: 0 }}>
                Done &nbsp;<ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
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

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button 
            type="button" 
            className="btn-google" 
            onClick={async () => {
              try {
                setError('');
                const result = await signInWithPopup(auth, googleProvider);
                const user = result.user;
                
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                
                if (userSnap.exists()) {
                   // Returning user, log in instantly
                   const existingData = userSnap.data();
                   const authUser = { ...existingData, lastLogin: new Date().toISOString() };
                   
                   // Update last login in background
                   setDoc(userRef, { lastLogin: authUser.lastLogin }, { merge: true }).catch(err => console.error(err));
                   onLogin(authUser);
                } else {
                   // First time user, trigger onboarding!
                   setGoogleUser(user);
                   setOnboardingUsername((user.displayName || user.email.split('@')[0]).replace(/\s+/g, '').toLowerCase());
                   // Keep the default first anime avatar from our state initialization
                   setShowOnboarding(true);
                }
              } catch (error) {
                console.error(error);
                setError(error.message.replace('Firebase: ', ''));
              }
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
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
