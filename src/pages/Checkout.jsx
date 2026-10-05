import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productimg1 from '../assets/productimg/1.png';
import productimg2 from '../assets/productimg/2.png';
import { useCart } from '../context/CartContext.jsx';
import './CartCheckout.css';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="cc-page">
      {/* Reusing shop-top-header style from index.css */}
      <div className="shop-top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="cc-header-left">
          <span>PLACE ORDER</span>
          <h1>BILLING DETAILS</h1>
        </div>
        <Link to="/cart" className="cc-header-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back To Cart
        </Link>
      </div>

      <div className="cc-container">
        <div className="cc-left">
          <div className="checkout-form">
            <div className="checkout-form-title">
              <div className="checkout-form-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <span>PLACE ORDER</span>
                <h2>BILLING DETAILS</h2>
              </div>
            </div>

            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid half">
                <div className="form-group no-icon">
                  <label>First name *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="First name" />
                  </div>
                </div>
                <div className="form-group no-icon">
                  <label>Last name *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>
              </div>

              <div className="form-group no-icon">
                <label>Company name (optional)</label>
                <div className="form-input-wrapper">
                  <input type="text" placeholder="Company name" />
                </div>
              </div>

              <div className="form-group no-icon">
                <label>Country / Region *</label>
                <div className="form-input-wrapper">
                  <select>
                    <option>India</option>
                  </select>
                </div>
              </div>

              <div className="form-group no-icon">
                <label>Street address *</label>
                <div className="form-input-wrapper">
                  <input type="text" placeholder="House number and street name" />
                </div>
              </div>

              <div className="form-group no-icon">
                <label>Apartment, suite, unit, etc. (optional)</label>
                <div className="form-input-wrapper">
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                </div>
              </div>

              <div className="form-grid half">
                <div className="form-group no-icon">
                  <label>Town / City *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="Town / City" />
                  </div>
                </div>
                <div className="form-group no-icon">
                  <label>State *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="State" />
                  </div>
                </div>
              </div>

              <div className="form-grid half">
                <div className="form-group no-icon">
                  <label>ZIP Code *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="ZIP Code" />
                  </div>
                </div>
                <div className="form-group no-icon">
                  <label>Phone *</label>
                  <div className="form-input-wrapper">
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
              </div>

              <div className="form-group no-icon">
                <label>Email address *</label>
                <div className="form-input-wrapper">
                  <input type="email" placeholder="Email address" />
                </div>
              </div>

              <div style={{ margin: '10px 0' }}>
                <label className="checkbox-group">
                  <input type="checkbox" />
                  Create an account?
                </label>
                <label className="checkbox-group">
                  <input type="checkbox" />
                  Ship to a different address?
                </label>
              </div>

              <div className="form-group no-icon">
                <label>Order notes (optional)</label>
                <div className="form-input-wrapper">
                  <textarea rows="4" placeholder="Notes about your order, e.g. special delivery instructions"></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="cc-right">
          <div className="cc-box checkout-cart-box">
            <div className="cc-box-title">CART REVIEW</div>
            
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="checkout-review-item">
                  <img src={item.img || item.image} alt={item.title || item.name} />
                  <div className="checkout-review-details">
                    <div className="checkout-review-title">{item.title || item.name}</div>
                    <div className="checkout-review-price">₹{item.price} × {item.qty}</div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '20px 0', fontSize: '14px', opacity: 0.8 }}>Your cart is empty.</div>
            )}

            <div className="checkout-review-total">
              <div>Total</div>
              <div>₹{cartTotal.toLocaleString()}</div>
            </div>
            <div className="checkout-cart-box-footer">
              Final shipping details can be confirmed by Aventura team.
            </div>
          </div>

          <div className="cc-box">
            <div className="cc-box-title">PAYMENT METHOD</div>
            
            <div 
              className={`payment-option ${paymentMethod === 'razorpay' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('razorpay')}
            >
              <input type="radio" checked={paymentMethod === 'razorpay'} readOnly />
              <div className="payment-details">
                <h4>Razorpay</h4>
                <p>Pay securely online with Razorpay.</p>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('cod')}
            >
              <input type="radio" checked={paymentMethod === 'cod'} readOnly />
              <div className="payment-details">
                <h4>Cash on delivery</h4>
                <p>Pay when your order is delivered.</p>
              </div>
            </div>

            <div className="payment-notice">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </div>

            <label className="checkbox-group" style={{ alignItems: 'flex-start' }}>
              <input type="checkbox" style={{ marginTop: '2px' }} />
              <span style={{ fontSize: '13px' }}>I have read and agree to the website terms and conditions *</span>
            </label>

            <button className="btn-checkout" style={{ marginTop: '20px' }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
