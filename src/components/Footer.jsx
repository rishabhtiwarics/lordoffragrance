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
              &#8594;
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
          <div className="footer-contact-line" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="white"/>
            </svg>
            <span>Address goes here</span>
          </div>
          <a href="tel:+1234567890" className="footer-contact-line" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="white"/>
            </svg>
            +1 234 567 890
          </a>
          <a href="mailto:lordoffragrance@gmail.com" className="footer-contact-line" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <svg width="16" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5h18v14H3V5Z" stroke="white" strokeWidth="1.5" />
              <path d="M3 6l9 7 9-7" stroke="white" strokeWidth="1.5" />
            </svg>
            LORDOFFRAGRANCE@GMAIL.COM
          </a>
        </div>
      </div>

      <div className="footer-socials">
        <a href="#">INSTAGRAM</a>
        <a href="#">YOUTUBE</a>
        <a href="#">FACEBOOK</a>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026, All Rights Reserved. LORD OF FRAGRANCE &mdash; A unit of Devillia{' '}
          <span className="footer-credit">
            Created By{' '}
            <a href="https://www.launchveda.com/" target="_blank" rel="noreferrer">
              Launchveda
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
