import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="shop-page-wrapper">
      <div className="shop-top-header">
        <div className="shop-breadcrumbs">
          <Link to="/">Home</Link> / <span>Privacy Policy</span>
        </div>
        <h1 className="shop-main-title">PRIVACY POLICY</h1>
      </div>
      <div style={{ padding: '0 5%', maxWidth: '900px', margin: '40px auto', lineHeight: '1.8', color: '#595555' }}>
        <h2>1. Introduction</h2>
        <p>Welcome to Lord of Fragrance. We value your privacy and are committed to protecting your personal data.</p>
        
        <h2 style={{ marginTop: '24px' }}>2. Data Collection</h2>
        <p>We collect information you provide directly to us when you create an account, make a purchase, or sign up for our newsletter.</p>
        
        <h2 style={{ marginTop: '24px' }}>3. How We Use Your Data</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information.</p>
      </div>
    </div>
  )
}
