import './ImpressionParallax.css'
import impressionImage from '../assets/parallaximg.jpeg'

export default function ImpressionParallax() {
  return (
    <section
      className="impression-parallax"
      style={{ backgroundImage: `url(${impressionImage})` }}
    >
      <div className="impression-parallax-content">
        <h2>LEAVE AN IMPRESSION.</h2>
        <p>Find the fragrance that becomes uniquely yours.</p>
        <a href="#shop" className="impression-parallax-link">
          SHOP COLLECTION
        </a>
      </div>
    </section>
  )
}