import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'
import CartSidebar from './CartSidebar.jsx'
import SearchMegaMenu from './SearchMegaMenu.jsx'
import logoImg from '../../assets/headerlogo.png'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    function updateMenuOffset() {
      if (headerRef.current) {
        const bottom = headerRef.current.getBoundingClientRect().bottom
        document.documentElement.style.setProperty('--menu-top', `${Math.max(bottom, 0)}px`)
      }
    }
    updateMenuOffset()
    window.addEventListener('scroll', updateMenuOffset, { passive: true })
    window.addEventListener('resize', updateMenuOffset)
    return () => {
      window.removeEventListener('scroll', updateMenuOffset)
      window.removeEventListener('resize', updateMenuOffset)
    }
  }, [])

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <button
          className="icon-btn menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="1" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="2" fill="white" />
              <rect y="7" width="22" height="2" fill="white" />
              <rect y="14" width="22" height="2" fill="white" />
            </svg>
          )}
        </button>

        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="Lord of Fragrance" className="logo-img" />
          </Link>
        </div>

        <div className="header-right">
          <button className="icon-btn search-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="buy-now-btn">Buy Now</button>
          <button className="icon-btn cart-btn" aria-label={cartOpen ? 'Close cart' : 'Open cart'} onClick={() => setCartOpen((v) => !v)}>
            {cartOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="1" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="1" x2="1" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9.5" cy="19.5" r="1.3" fill="white" />
                <circle cx="17" cy="19.5" r="1.3" fill="white" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchMegaMenu open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
