import './PromoBanner.css'
import heroBanner1 from '../assets/bnner/herobanner1.jpeg'

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <img src={heroBanner1} alt="Promo Banner" className="promo-banner-img" />
    </section>
  )
}
