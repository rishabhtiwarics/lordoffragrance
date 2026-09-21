import './MobileMenu.css'

const links = [
  'LEGACY GIFT SET',
  'SHOP ALL',
  'FRAGRANCES',
  'BUILD YOUR OWN BUNDLE',
  'KNOW LORD OF FRAGRANCE',
]

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      {open && <div className="mobile-menu-backdrop" onClick={onClose} aria-label="Close menu" />}
      <div className={`mobile-menu-overlay ${open ? 'open' : ''}`}>
      <div className="mobile-menu-body">
        <nav className="mobile-menu-links">
          {links.map((link) => (
            <a href="#" key={link} className="mobile-menu-link">
              {link}
              {link === 'FRAGRANCES' && <span className="chevron">⌄</span>}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <div className="account-btns">
            <button className="account-btn">TRACK ORDER</button>
            <button className="account-btn">LOGIN</button>
          </div>

          <div className="follow-us">
            <p className="follow-us-label">FOLLOW US</p>
            <div className="social-icons">
              <a href="#" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8-9.2L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.5H16l.4-3.3h-2.9V8.1c0-.9.3-1.6 1.7-1.6H16.5V3.5C16 3.4 15 3.3 13.9 3.3c-2.3 0-3.9 1.4-3.9 4V10H7.6v3.3H10V22h3.5Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.1 1.1 0 1.7.2 2.1.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.4 1 .4 2.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.7-.4 2.1-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .4-2.1.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.7-.2-2.1-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.4-1-.4-2.1C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c0-1.1.2-1.7.4-2.1.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2.1-.4C8 2.2 8.3 2.2 12 2.2Zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1.1-.1-1.4-.1-4-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-2a1.1 1.1 0 1 1 0 2.1 1.1 1.1 0 0 1 0-2.1Z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.8v1.4C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6ZM10 14.6V8.9l5.2 2.9-5.2 2.8Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
