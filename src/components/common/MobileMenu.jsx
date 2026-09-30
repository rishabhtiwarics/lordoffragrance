import { Link } from 'react-router-dom'


const links = [
  { name: 'HOME', path: '/' },
  { name: 'KNOW LORD OF FRAGRANCE', path: '/about' },
  { name: 'SHOP ALL', path: '/shop' },
  { name: 'CONTACT', path: '/contact' },
]

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      {open && <div className="mobile-menu-backdrop" onClick={onClose} aria-label="Close menu" />}
      <div className={`mobile-menu-overlay ${open ? 'open' : ''}`}>
      <div className="mobile-menu-body">
        <nav className="mobile-menu-links">
          {links.map((link) => (
            <Link to={link.path} key={link.name} className="mobile-menu-link" onClick={onClose}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <div className="account-btns">
            <Link to="/register" className="account-btn" onClick={onClose}>REGISTER</Link>
            <Link to="/login" className="account-btn" onClick={onClose}>LOGIN</Link>
          </div>

          <div className="follow-us">
            <p className="follow-us-label">FOLLOW US</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.5H16l.4-3.3h-2.9V8.1c0-.9.3-1.6 1.7-1.6H16.5V3.5C16 3.4 15 3.3 13.9 3.3c-2.3 0-3.9 1.4-3.9 4V10H7.6v3.3H10V22h3.5Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.1 1.1 0 1.7.2 2.1.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.4 1 .4 2.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.7-.4 2.1-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3-.8-.4.2-1 .4-2.1.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.7-.2-2.1-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.4-1-.4-2.1C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c0-1.1.2-1.7.4-2.1.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2.1-.4C8 2.2 8.3 2.2 12 2.2Zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1.1-.1-1.4-.1-4-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-2a1.1 1.1 0 1 1 0 2.1 1.1 1.1 0 0 1 0-2.1Z"/></svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
