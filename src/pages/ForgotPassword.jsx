import React from 'react';
import { Link } from 'react-router-dom';
import authBg from '../assets/authbg.jpeg';
import authSide from '../assets/authsideimg.jpeg';
import logo from '../assets/logo.png';
import './Auth.css';

export default function ForgotPassword() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
          </div>
          <h1>RESET PASSWORD</h1>
          <p style={{ marginBottom: '40px' }}>Enter your email to receive reset instructions.</p>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your registered email" />
            </div>
            
            <button type="submit" className="btn-submit" style={{ marginTop: '16px' }}>
              Send Reset Link
            </button>
            
            <Link to="/" className="btn-home">
              Back to Home
            </Link>
            
            <div className="auth-switch">
              Remembered your password? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
