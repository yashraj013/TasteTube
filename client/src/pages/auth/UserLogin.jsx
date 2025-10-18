import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/shared.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('User login data:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your TasteTube account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                style={{ paddingRight: '40px' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  fontSize: '14px'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--spacing-md)'
          }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)'
            }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ 
                  accentColor: 'var(--primary-color)',
                  cursor: 'pointer'
                }}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="auth-link text-sm">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Sign In
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <button className="btn btn-secondary">
            <span>🔗</span>
            Continue with Google
          </button>
          <button className="btn btn-secondary">
            <span>📘</span>
            Continue with Facebook
          </button>
        </div>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Don't have an account?{' '}
            <Link to="/user/register" className="auth-link">
              Create one here
            </Link>
          </p>
          <p className="auth-footer-text" style={{ marginTop: 'var(--spacing-sm)' }}>
            Are you a food partner?{' '}
            <Link to="/foodpartner/login" className="auth-link">
              Partner Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
