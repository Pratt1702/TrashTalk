import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import '../styles/ProfileSetup.css';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: 'agent',
    zone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.error('No user found');
        return;
      }

      const { error } = await supabase
        .from('users')
        .insert([
          {
            id: user.id,
            name: formData.name,
            role: formData.role,
            zone: formData.zone,
            email: user.email,
            is_active: true
          }
        ]);

      if (error) {
        console.error('Error saving profile:', error);
        return;
      }

      // Redirect based on role
      navigate(formData.role === 'admin' ? '/admin' : '/agent');
      
    } catch (error) {
      console.error('Error in profile setup:', error);
    }
  };

  return (
    <div className="profile-setup-container">
      <div className="profile-setup-content">
        <h1>Complete Your Profile</h1>
        <p>Please provide your information to get started</p>
        
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {formData.role === 'agent' && (
            <div className="form-group">
              <label htmlFor="zone">Zone</label>
              <input
                type="text"
                id="zone"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                required={formData.role === 'agent'}
                placeholder="Enter your zone"
                className="form-input"
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup; 