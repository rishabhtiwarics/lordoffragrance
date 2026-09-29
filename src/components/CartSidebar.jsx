import './CartSidebar.css'
import CartItemCard from './common/CartItemCard.jsx'
import { Link } from 'react-router-dom'

export default function CartSidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="cart-sidebar-backdrop" onClick={onClose} aria-label="Close cart" />}
      <div className={`cart-sidebar ${open ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h2>YOUR CART (2)</h2>
          <button onClick={onClose} aria-label="Close" className="cart-close-btn">✕</button>
        </div>
        <div className="cart-sidebar-body">
          <CartItemCard variant="mini" />
          <CartItemCard variant="mini" />
        </div>
        <div className="cart-sidebar-footer">
          <div className="cart-sidebar-totals">
            <span>Subtotal</span>
            <span>$240.00</span>
          </div>
          <p className="cart-sidebar-tax-note">Shipping & taxes calculated at checkout</p>
          <button className="cart-sidebar-checkout-btn">CHECKOUT</button>
          <Link to="/cart" className="cart-sidebar-view-btn" onClick={onClose}>VIEW CART</Link>
        </div>
      </div>
    </>
  )
}
