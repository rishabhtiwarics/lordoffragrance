import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ variant = 'shop' }) {
  const isSearch = variant === 'search'
  
  return (
    <div className={`product-card variant-${variant}`}>
      <Link to="/product/1" className="product-card-img-link">
        <div className="product-card-img-wrap">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2787&auto=format&fit=crop" alt="Fragrance" />
        </div>
      </Link>
      <div className="product-card-info">
        <Link to="/product/1" className="product-card-title-link">
          <h3 className="product-card-title">Lord of Fragrance</h3>
        </Link>
        <p className="product-card-subtitle">Extrait De Parfum</p>
        <p className="product-card-price">$120.00</p>
        
        {!isSearch && (
          <button className="product-card-btn">ADD TO CART</button>
        )}
      </div>
    </div>
  )
}
