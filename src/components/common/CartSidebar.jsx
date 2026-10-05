
import CartItemCard from '../cart/CartItemCard.jsx'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'

export default function CartSidebar({ open, onClose }) {
  const { cartItems, cartTotal, cartCount } = useCart();
  return (
    <>
      {open && <div className="cart-sidebar-backdrop" onClick={onClose} aria-label="Close cart" />}
      <div className={`cart-sidebar ${open ? 'open' : ''}`}>
        <div className="cart-sidebar-body" style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItemCard key={item.id} variant="sidebar" item={item} />
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#595555', marginTop: '20px' }}>Your cart is empty.</div>
          )}
        </div>
        <div className="cart-sidebar-footer" style={{ padding: '20px', borderTop: '1px solid #eaeaea', background: '#fafafa' }}>
          <div className="cart-sidebar-totals" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#595555' }}>
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <p className="cart-sidebar-tax-note" style={{ fontSize: '12px', color: '#888', textAlign: 'center', margin: '0 0 20px 0' }}>Shipping & taxes calculated at checkout</p>
          <Link to="/checkout" className="btn-checkout" style={{ width: '100%', padding: '14px', background: '#595555', color: '#fff', textAlign: 'center', border: 'none', fontWeight: 600, cursor: 'pointer', marginBottom: '10px', textDecoration: 'none', display: 'block' }}>CHECKOUT</Link>
          <Link to="/cart" className="cart-sidebar-view-btn" onClick={onClose} style={{ display: 'block', width: '100%', padding: '14px', background: '#fff', border: '1px solid #595555', color: '#595555', textAlign: 'center', fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>VIEW CART</Link>
        </div>
      </div>
    </>
  )
}
