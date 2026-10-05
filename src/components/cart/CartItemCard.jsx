import React from 'react';
import { useCart } from '../../context/CartContext.jsx';

export default function CartItemCard({ variant = 'sidebar', item }) {
  const { updateQty, removeFromCart } = useCart();

  if (!item) return null;

  if (variant === 'page') {
    // Large variant for the main Cart page
    return (
      <div className="cart-item">
        <img src={item.img || item.image} alt={item.title || item.name} className="cart-item-img" />
        <div className="cart-item-details">
          <div className="cart-item-title">{item.title || item.name}</div>
          <div className="cart-item-price-each">₹{item.price} each</div>
        </div>
        <div className="cart-qty-selector">
          <button className="cart-qty-btn" onClick={() => updateQty(item.id, -1)}>-</button>
          <span className="cart-qty-val">{item.qty}</span>
          <button className="cart-qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
        </div>
        <div className="cart-item-total">₹{item.price * item.qty}</div>
        <button className="cart-item-delete" onClick={() => removeFromCart(item.id)}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    );
  }

  // Mini variant for the Sidebar
  return (
    <div className="cart-item-card mini-variant">
      <div className="cart-item-img-wrap">
        <img src={item.img || item.image} alt={item.title || item.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
      <div className="cart-item-details" style={{ flex: 1 }}>
        <div className="cart-item-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h4 className="cart-item-title" style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#595555' }}>
            {item.title || item.name}
          </h4>
          <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', padding: '0 0 0 8px' }}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p className="cart-item-variant-text" style={{ fontSize: '12px', color: '#888', margin: '4px 0 12px 0' }}>
          {item.subtitle || ''}
        </p>
        <div className="cart-item-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="cart-qty-selector" style={{ border: '1px solid #eaeaea', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '2px 8px', gap: '12px' }}>
            <button className="qty-btn" onClick={() => updateQty(item.id, -1)} style={{ background: 'none', border: 'none', color: '#595555', cursor: 'pointer' }}>-</button>
            <span className="qty-val" style={{ fontSize: '13px', fontWeight: 600, color: '#595555' }}>{item.qty}</span>
            <button className="qty-btn" onClick={() => updateQty(item.id, 1)} style={{ background: 'none', border: 'none', color: '#595555', cursor: 'pointer' }}>+</button>
          </div>
          <p className="cart-item-price" style={{ margin: 0, fontWeight: 600, color: '#595555', fontSize: '14px' }}>
            ₹{(item.price * item.qty).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
