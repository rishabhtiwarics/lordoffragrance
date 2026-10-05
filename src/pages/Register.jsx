import React from 'react';
import { Link } from 'react-router-dom';
import authBg from '../assets/authbg.jpeg';
import authSide from '../assets/authsideimg.jpeg';
import logo from '../assets/logo.png';
import './Auth.css';

export default function Register() {
  return (
    <section className="auth-page" style={{ backgroundImage: `url(${authBg})`, flexDirection: 'column' }}>
      <Link to="/" style={{ marginBottom: '30px' }}>
        <img src={logo} alt="LORD OF FRAGRANCE" style={{ height: '80px', filter: 'brightness(0)' }} />
      </Link>
      <div className="auth-card">
        <div className="auth-card-left">
          <img src={authSide} alt="LORD OF FRAGRANCE" />
        </div>
        <div className="auth-card-right">
          <div className="auth-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </div>
          <h1>REGISTER</h1>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="auth-input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            
            <div className="auth-input-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>
            
            <button type="submit" className="btn-submit" style={{ marginTop: '16px' }}>
              Create Account
            </button>
            
            <Link to="/" className="btn-home">
              Back to Home
            </Link>
            
            <div className="auth-switch">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
