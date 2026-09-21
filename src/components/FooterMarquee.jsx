import './FooterMarquee.css'

const marqueeItems = Array.from({ length: 12 }, (_, index) => index)

export default function FooterMarquee() {
  return (
    <section className="footer-marquee" aria-label="Lord of Fragnance marquee">
      <div className="footer-marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="footer-marquee-text" key={`${item}-${index}`}>
            LORD OF FRAGNANCE
            <span className="footer-marquee-line" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}