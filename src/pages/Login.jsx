import React from 'react';
import { Link } from 'react-router-dom';
import authBg from '../assets/authbg.jpeg';
import authSide from '../assets/authsideimg.jpeg';
import logo from '../assets/logo.png';
import './Auth.css';

export default function Login() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h1>LOGIN</h1>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            
            <div className="auth-input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            
            <div className="auth-forgot">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            
            <button type="submit" className="btn-submit">
              Login
            </button>
            
            <Link to="/" className="btn-home">
              Back to Home
            </Link>
            
            <div className="auth-switch">
              New here? <Link to="/register">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
