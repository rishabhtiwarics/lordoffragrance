import { useState } from 'react'
import logoImg from '../assets/logo.png'
import './Footer.css'

const columns = [
  {
    title: 'FRAGRANCES',
    links: ['Throne', 'Noble', 'Regal', 'Orion', 'Build Your Own Bundle', 'Legacy Gift Set'],
  },
  {
    title: 'COMPANY',
    links: ['Know Us'],
  },
  {
    title: 'POLICY',
    links: [
      'Privacy Policy',
      'Terms & Conditions',
      'Orders & Shipping',
      'Cancellation Policy',
      'Refund Policy',
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="site-footer">
      <div className="footer-logo-wrap">
        <img src={logoImg} alt="Lord of Fragrance" className="footer-logo-img" />
      </div>

      <div className="footer-grid">
        <div className="footer-email-block">
          <label className="footer-email-label" htmlFor="footer-email">
            ENTER EMAIL
          </label>
          <div className="footer-email-row">
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-email-input"
              placeholder=""
            />
            <button className="footer-email-arrow" aria-label="Submit email">
              →
            </button>
          </div>
        </div>

        {columns.map((col) => (
          <div className="footer-column" key={col.title}>
            <p className="footer-column-title">{col.title}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column footer-contact">
          <p className="footer-column-title">CONTACT US</p>
          <a href="mailto:support@lordoffragrance.com" className="footer-contact-line">
            <svg width="16" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5h18v14H3V5Z" stroke="white" strokeWidth="1.5" />
              <path d="M3 6l9 7 9-7" stroke="white" strokeWidth="1.5" />
            </svg>
            SUPPORT@LORDOFFRAGRANCE.COM
          </a>
          <a href="#" className="footer-contact-line">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.5 2 2 6.4 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3A9.9 9.9 0 0 0 12 22c5.5 0 10-4.4 10-10S17.5 2 12 2Z" />
            </svg>
            <span className="underline">REACH US HERE</span>
          </a>
        </div>
      </div>

      <div className="footer-socials">
        <a href="#">INSTAGRAM</a>
        <a href="#">YOUTUBE</a>
        <a href="#">FACEBOOK</a>
        <a href="#">X</a>
      </div>

      <div className="footer-bottom">
        <p>© 2026, All Rights Reserved. LORD OF FRAGRANCE — A unit of Devillia</p>
      </div>
    </footer>
  )
}
