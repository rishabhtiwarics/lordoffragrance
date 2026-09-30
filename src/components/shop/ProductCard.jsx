import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ variant = 'shop', product = {} }) {
  const { image, name, title, subtitle, price, mrp } = product
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Display skeleton until the image is fully loaded
  const showSkeleton = !isLoaded 

  // ── Featured Duo: wide banner card (grid-column: 1 / -1)
  if (variant === 'featured-wide') {
    return (
      <article className="featured-duo-wide">
        {showSkeleton && <div className="skeleton-overlay"></div>}
        <Link to={`/product/${product.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
          <img src={image} alt={title} className="featured-duo-wide-img" onLoad={() => setIsLoaded(true)} />
        </Link>
        <div className="featured-duo-wide-content">
          {showSkeleton ? (
            <>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-subtitle"></div>
              <div className="skeleton-text skeleton-btn"></div>
            </>
          ) : (
            <>
              <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2>{title}</h2>
              </Link>
              <p>{subtitle}</p>
              <Link to={`/product/${product.id}`} className="featured-duo-btn">EXPLORE PERFUME</Link>
            </>
          )}
        </div>
      </article>
    )
  }

  // ── Featured Duo: regular card
  if (variant === 'featured') {
    return (
      <article className="featured-duo-card">
        {showSkeleton && <div className="skeleton-overlay"></div>}
        <Link to={`/product/${product.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
          <img src={image} alt={title} className="featured-duo-img" onLoad={() => setIsLoaded(true)} />
        </Link>
        <div className="featured-duo-content">
          {showSkeleton ? (
            <>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-subtitle"></div>
              <div className="skeleton-text skeleton-btn"></div>
            </>
          ) : (
            <>
              <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2>{title}</h2>
              </Link>
              <p>{subtitle}</p>
              <Link to={`/product/${product.id}`} className="featured-duo-btn">EXPLORE PERFUME</Link>
            </>
          )}
        </div>
      </article>
    )
  }

  // ── Shop Collection card
  if (variant === 'shop-collection') {
    return (
      <div className="product-card">
        <Link to={`/product/${product.id}`} style={{ display: 'block', textDecoration: 'none' }}>
          <div className="product-image-wrap">
            {showSkeleton && <div className="skeleton-overlay"></div>}
            <img src={image} alt={name} className="product-image" onLoad={() => setIsLoaded(true)} />
          </div>
        </Link>
        {showSkeleton ? (
          <>
            <div className="skeleton-text skeleton-name-sm"></div>
            <div className="skeleton-text skeleton-price-sm"></div>
            <div className="skeleton-text skeleton-btn-full"></div>
          </>
        ) : (
          <>
            <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <p className="product-name">{name}</p>
            </Link>
            <p className="product-price">
              {price} <span className="product-mrp">{mrp}</span>
            </p>
            <button className="product-cta">Add To Cart</button>
          </>
        )}
      </div>
    )
  }

  // ── Combo Offer card
  if (variant === 'combo') {
    return (
      <article className="combo-card">
        <Link to={`/product/${product.id}`} className="combo-img-wrap" style={{ textDecoration: 'none', display: 'block' }}>
          {showSkeleton && <div className="skeleton-overlay"></div>}
          <img src={product.comboImage || image} alt={name} className="combo-img" onLoad={() => setIsLoaded(true)} />
        </Link>
        <div className="combo-content">
          {showSkeleton ? (
            <>
              <div className="skeleton-text skeleton-subtitle"></div>
              <div className="skeleton-text skeleton-title-combo"></div>
              <div className="skeleton-text skeleton-price"></div>
              <div className="skeleton-text skeleton-desc"></div>
              <div className="combo-actions">
                <div className="skeleton-text skeleton-btn-combo" style={{ flex: 1 }}></div>
                <div className="skeleton-text skeleton-btn-combo" style={{ flex: 1 }}></div>
              </div>
            </>
          ) : (
            <>
              <p className="combo-subtitle">{subtitle}</p>
              <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2 className="combo-title">{name}</h2>
              </Link>
              <p className="combo-price">{price}</p>
              <p className="combo-desc">{product.description}</p>
              <div className="combo-actions">
                <Link to="/cart" style={{ flex: 1, textDecoration: 'none' }}>
                  <button className="combo-btn combo-btn-primary">ADD TO CART</button>
                </Link>
                <Link to="/checkout" style={{ flex: 1, textDecoration: 'none' }}>
                  <button className="combo-btn combo-btn-secondary">BUY NOW</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </article>
    )
  }

  // ── Default variants: shop, home, search
  const isSearch = variant === 'search'

  return (
    <div className={`product-card variant-${variant}`}>
      <Link to={`/product/${product.id}`} className="product-card-img-link">
        <div className="product-card-img-wrap">
          {showSkeleton && <div className="skeleton-overlay"></div>}
          <img
            src={image || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2787&auto=format&fit=crop'}
            alt={name || title || 'Fragrance'}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </Link>
      <div className="product-card-info">
        {showSkeleton ? (
          <>
            <div className="skeleton-text skeleton-title-sm"></div>
            <div className="skeleton-text skeleton-subtitle-sm"></div>
            <div className="skeleton-text skeleton-price-sm"></div>
            {!isSearch && <div className="skeleton-text skeleton-btn-outline"></div>}
          </>
        ) : (
          <>
            <Link to={`/product/${product.id}`} className="product-card-title-link">
              <h3 className="product-card-title">{name || title || 'Lord of Fragrance'}</h3>
            </Link>
            <p className="product-card-subtitle">{subtitle || 'Extrait De Parfum'}</p>
            <p className="product-card-price">{price || '$120.00'}</p>
            {!isSearch && (
              <button className="product-card-btn">ADD TO CART</button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
