import React from 'react';
import { Link } from 'react-router-dom';
import CartItemCard from '../components/cart/CartItemCard.jsx';
import { useCart } from '../context/CartContext.jsx';
import './CartCheckout.css';

export default function Cart() {
  const { cartItems, cartTotal } = useCart();
  return (
    <div className="cc-page">
      {/* Reusing shop-top-header style from index.css as requested */}
      <div className="shop-top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="cc-header-left">
          <span>YOUR SELECTIONS</span>
          <h1>SHOPPING CART</h1>
        </div>
        <Link to="/shop" className="cc-header-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Continue Shopping
        </Link>
      </div>

      <div className="cc-container">
        <div className="cc-left">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItemCard key={item.id} variant="page" item={item} />
            ))
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', color: '#595555' }}>
              Your cart is empty.
            </div>
          )}
        </div>

        <div className="cc-right">
          <div className="cc-box">
            <div className="cc-box-title">ORDER SUMMARY</div>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="summary-shipping">Calculated at Checkout</span>
            </div>
            
            <div className="summary-row total">
              <span>Estimated Total</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>

            <Link to="/checkout" className="btn-checkout">
              PROCEED TO CHECKOUT
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
