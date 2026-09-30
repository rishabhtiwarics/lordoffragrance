import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  return (
    <div className="shop-page-wrapper">
      <div className="shop-top-header">
        <div className="shop-breadcrumbs">
          <Link to="/">Home</Link> / <span>Refund Policy</span>
        </div>
        <h1 className="shop-main-title">REFUND POLICY</h1>
      </div>
      <div style={{ padding: '0 5%', maxWidth: '900px', margin: '40px auto', lineHeight: '1.8', color: '#111' }}>
        <h2>1. Returns</h2>
        <p>Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        
        <h2 style={{ marginTop: '24px' }}>2. Refunds</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment.</p>
        
        <h2 style={{ marginTop: '24px' }}>3. Shipping Returns</h2>
        <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
      </div>
    </div>
  )
}
