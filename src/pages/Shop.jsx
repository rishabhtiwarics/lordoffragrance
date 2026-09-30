import { useState } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../components/shop/ProductCard.jsx'
import { shopProducts } from '../data/products.js'

import heroBanner2 from '../assets/bnner/herobanner2.jpeg'

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const filteredProducts = shopProducts.filter((product) => {
    if (!searchQuery) return true
    const searchLower = searchQuery.toLowerCase()
    return (
      (product.name && product.name.toLowerCase().includes(searchLower)) ||
      (product.subtitle && product.subtitle.toLowerCase().includes(searchLower)) ||
      (product.title && product.title.toLowerCase().includes(searchLower))
    )
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Handle search change (reset to page 1)
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="shop-page-wrapper">
      <div className="shop-top-header">
        <div className="shop-breadcrumbs">
          <Link to="/">Home</Link> / <span>Shop</span>
        </div>
        <h1 className="shop-main-title">SHOP ALL</h1>
      </div>

      <div className="shop-content-layout">
        <aside className="shop-sidebar">
          <h3>Filters</h3>
          
          <div className="shop-filter-section">
            <h4>Search</h4>
            <input 
              type="text"
              className="shop-search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="shop-filter-section">
            <h4>Collections</h4>
            <label><input type="checkbox" /> Extrait De Parfum</label>
            <label><input type="checkbox" /> Sets</label>
          </div>
          <div className="shop-filter-section">
            <h4>Price</h4>
            <label><input type="checkbox" /> Under ₹1,500</label>
            <label><input type="checkbox" /> Above ₹1,500</label>
          </div>
        </aside>

        <main className="shop-products-area">
          <div className="shop-products-grid">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} variant="shop-collection" product={product} />
              ))
            ) : (
              <p className="no-products-msg">No products found for "{searchQuery}".</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="shop-pagination">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>

      <div className="shop-features-section">
        <div className="shop-features-grid">
          <div className="shop-feature-item">
            <div className="shop-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <h4>Payment only online</h4>
            <p>Secure prepaid checkout for faster confirmation and smooth order processing.</p>
          </div>
          <div className="shop-feature-item">
            <div className="shop-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
            </div>
            <h4>New stocks and sales</h4>
            <p>Discover fresh fragrance launches, limited editions, and seasonal perfume offers.</p>
          </div>
          <div className="shop-feature-item">
            <div className="shop-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            </div>
            <h4>Quality assurance</h4>
            <p>Every fragrance is selected for its refined notes, lasting character, and presentation.</p>
          </div>
          <div className="shop-feature-item">
            <div className="shop-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h4>Delivery from 1 hour</h4>
            <p>Quick local delivery support where available, with careful packing for every bottle.</p>
          </div>
        </div>
      </div>

      <img src={heroBanner2} alt="Promo Banner" className="shop-full-width-banner" />
    </div>
  )
}
