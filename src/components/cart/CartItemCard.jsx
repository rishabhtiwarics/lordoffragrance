

export default function CartItemCard({ variant = 'page' }) {
  const isMini = variant === 'mini'
  
  return (
    <div className={`cart-item-card ${isMini ? 'mini-variant' : 'page-variant'}`}>
      <div className="cart-item-img-wrap">
        <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2787&auto=format&fit=crop" alt="Fragrance" />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-header">
          <h4 className="cart-item-title">Lord of Fragrance Signature</h4>
          <button className="cart-item-remove" aria-label="Remove item">✕</button>
        </div>
        <p className="cart-item-variant-text">50ml / Extrait De Parfum</p>
        <div className="cart-item-footer">
          <div className="cart-qty-selector">
            <button className="qty-btn">−</button>
            <span className="qty-val">1</span>
            <button className="qty-btn">+</button>
          </div>
          <p className="cart-item-price">$120.00</p>
        </div>
      </div>
    </div>
  )
}
