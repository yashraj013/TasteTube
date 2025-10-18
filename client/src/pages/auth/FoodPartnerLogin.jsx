import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/shared.css';

const FoodPartnerLogin = () => {
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
    // TODO: Implement food partner login logic
    console.log('Food Partner login data:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🏪</div>
          <h1 className="auth-title">Partner Dashboard</h1>
          <p className="auth-subtitle">Access your restaurant management panel</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Business Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business email"
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
            <Link to="/foodpartner/forgot-password" className="auth-link text-sm">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Access Dashboard
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
            <span>📧</span>
            Continue with Microsoft
          </button>
        </div>

        <div className="auth-footer">
          <p className="auth-footer-text">
            New to TasteTube?{' '}
            <Link to="/foodpartner/register" className="auth-link">
              Register your restaurant
            </Link>
          </p>
          <p className="auth-footer-text" style={{ marginTop: 'var(--spacing-sm)' }}>
            Looking for food?{' '}
            <Link to="/user/login" className="auth-link">
              Sign in as customer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
