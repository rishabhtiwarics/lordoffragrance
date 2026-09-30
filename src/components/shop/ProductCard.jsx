
import { Link } from 'react-router-dom'

export default function ProductCard({ variant = 'shop', product = {} }) {
  const { image, name, title, subtitle, price, mrp } = product

  // ── Featured Duo: wide banner card (grid-column: 1 / -1)
  if (variant === 'featured-wide') {
    return (
      <article className="featured-duo-wide">
        <img src={image} alt={title} className="featured-duo-wide-img" />
        <div className="featured-duo-wide-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <a href="#shop" className="featured-duo-btn">EXPLORE PERFUME</a>
        </div>
      </article>
    )
  }

  // ── Featured Duo: regular card
  if (variant === 'featured') {
    return (
      <article className="featured-duo-card">
        <img src={image} alt={title} className="featured-duo-img" />
        <div className="featured-duo-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <a href="#shop" className="featured-duo-btn">EXPLORE PERFUME</a>
        </div>
      </article>
    )
  }

  // ── Shop Collection card
  if (variant === 'shop-collection') {
    return (
      <div className="product-card">
        <div className="product-image-wrap">
          <img src={image} alt={name} className="product-image" />
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">
          {price} <span className="product-mrp">{mrp}</span>
        </p>
        <button className="product-cta">Add To Cart</button>
      </div>
    )
  }

  // ── Combo Offer card
  if (variant === 'combo') {
    return (
      <article className="combo-card">
        <div className="combo-img-wrap">
          <img src={product.comboImage || image} alt={name} className="combo-img" />
        </div>
        <div className="combo-content">
          <p className="combo-subtitle">{subtitle}</p>
          <h2 className="combo-title">{name}</h2>
          <p className="combo-price">{price}</p>
          <p className="combo-desc">{product.description}</p>
          <div className="combo-actions">
            <button className="combo-btn combo-btn-primary">ADD TO CART</button>
            <button className="combo-btn combo-btn-secondary">BUY NOW</button>
          </div>
        </div>
      </article>
    )
  }

  // ── Default variants: shop, home, search
  const isSearch = variant === 'search'

  return (
    <div className={`product-card variant-${variant}`}>
      <Link to="/product/1" className="product-card-img-link">
        <div className="product-card-img-wrap">
          <img
            src={image || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2787&auto=format&fit=crop'}
            alt={name || title || 'Fragrance'}
          />
        </div>
      </Link>
      <div className="product-card-info">
        <Link to="/product/1" className="product-card-title-link">
          <h3 className="product-card-title">{name || title || 'Lord of Fragrance'}</h3>
        </Link>
        <p className="product-card-subtitle">{subtitle || 'Extrait De Parfum'}</p>
        <p className="product-card-price">{price || '$120.00'}</p>
        {!isSearch && (
          <button className="product-card-btn">ADD TO CART</button>
        )}
      </div>
    </div>
  )
}
