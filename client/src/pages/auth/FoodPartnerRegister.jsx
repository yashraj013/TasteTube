import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/shared.css';

const FoodPartnerRegister = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cuisineType: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement food partner registration logic
    console.log('Food Partner registration data:', formData);
  };

  const cuisineTypes = [
    'Italian', 'Chinese', 'Indian', 'Mexican', 'Thai', 'Japanese',
    'American', 'Mediterranean', 'French', 'Korean', 'Vietnamese',
    'Middle Eastern', 'Caribbean', 'African', 'Other'
  ];

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🏪</div>
          <h1 className="auth-title">Join as Food Partner</h1>
          <p className="auth-subtitle">Partner with us to reach more customers</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your restaurant name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerName" className="form-label">Owner/Manager Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter owner/manager name"
              required
            />
          </div>

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
            <label htmlFor="phone" className="form-label">Business Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">Business Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business address"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter city"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter state"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode" className="form-label">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter ZIP code"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cuisineType" className="form-label">Cuisine Type</label>
            <select
              id="cuisineType"
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select cuisine type</option>
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="licenseNumber" className="form-label">Business License Number</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business license number"
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
                placeholder="Create a strong password"
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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm your password"
                style={{ paddingRight: '40px' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Register as Food Partner
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Already have a partner account?{' '}
            <Link to="/foodpartner/login" className="auth-link">
              Sign in here
            </Link>
          </p>
          <p className="auth-footer-text" style={{ marginTop: 'var(--spacing-sm)' }}>
            Looking for food?{' '}
            <Link to="/user/register" className="auth-link">
              Register as Customer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
