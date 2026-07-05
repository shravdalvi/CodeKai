import React from 'react';
import { Mail, User, Calendar, Award } from 'lucide-react';

export default function UserProfile({ userProfile }) {
  const formatDate = (isoString) => {
    if (!isoString) return 'Unknown';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <h1>User Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="profile-card glass-panel">
        <div className="profile-hero">
          <div className="profile-avatar-wrapper">
            <img 
              src={userProfile?.avatar || '/avatars/gojo.png'} 
              alt="Profile" 
              className={`profile-large-avatar ${userProfile?.avatar?.includes('dragon') ? 'dragon-avatar' : ''}`} 
            />
          </div>
          <div className="profile-hero-info">
            <h2>{userProfile?.name}</h2>
            <p>@{userProfile?.username}</p>
          </div>
        </div>

        <div className="profile-details-grid">
          <div className="detail-item">
            <div className="detail-icon"><Mail size={18} /></div>
            <div className="detail-text">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{userProfile?.email}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon"><User size={18} /></div>
            <div className="detail-text">
              <span className="detail-label">Account ID</span>
              <span className="detail-value" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                {userProfile?.uid}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon"><Calendar size={18} /></div>
            <div className="detail-text">
              <span className="detail-label">Joined On</span>
              <span className="detail-value">{formatDate(userProfile?.createdAt)}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon"><Award size={18} /></div>
            <div className="detail-text">
              <span className="detail-label">Role</span>
              <span className="detail-value">CodeKai Ninja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
