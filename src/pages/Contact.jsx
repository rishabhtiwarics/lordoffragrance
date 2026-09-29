import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">CONTACT US</h1>
        <p className="contact-description">
          We would love to hear from you. Please fill out the form below and our team will get back to you shortly.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
          </div>
          
          <button type="button" className="contact-submit-btn">SEND MESSAGE</button>
        </form>

        <div className="contact-info">
          <p><strong>EMAIL:</strong> lordoffragrance@gmail.com</p>
          <p><strong>PHONE:</strong> +1 234 567 890</p>
        </div>
      </div>
    </div>
  )
}
