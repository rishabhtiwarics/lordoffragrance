
import impressionImageDesktop from '../../assets/parallaximg.jpeg'
import impressionImageMobile from '../../assets/mobileparallaximg.jpeg'

export default function ImpressionParallax() {
  return (
    <section
      className="impression-parallax"
      style={{ 
        '--bg-desktop': `url(${impressionImageDesktop})`,
        '--bg-mobile': `url(${impressionImageMobile})`
      }}
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
