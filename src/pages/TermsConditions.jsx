import { Link } from 'react-router-dom'

export default function TermsConditions() {
  return (
    <div className="shop-page-wrapper">
      <div className="shop-top-header">
        <div className="shop-breadcrumbs">
          <Link to="/">Home</Link> / <span>Terms & Conditions</span>
        </div>
        <h1 className="shop-main-title">TERMS & CONDITIONS</h1>
      </div>
      <div style={{ padding: '0 5%', maxWidth: '900px', margin: '40px auto', lineHeight: '1.8', color: '#595555' }}>
        <h2>1. General Terms</h2>
        <p>By accessing and placing an order with Lord of Fragrance, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below.</p>
        
        <h2 style={{ marginTop: '24px' }}>2. Products and Pricing</h2>
        <p>All products are subject to availability. We reserve the right to modify or discontinue any product at any time without notice. Prices for our products are subject to change without notice.</p>
        
        <h2 style={{ marginTop: '24px' }}>3. Shipping and Delivery</h2>
        <p>Delivery times are estimates and commence from the date of shipping. We shall not be liable for any delays resulting from postal delays or force majeure.</p>
      </div>
    </div>
  )
}
