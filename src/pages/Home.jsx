import Hero from '../components/Hero.jsx'
import BenefitsBar from '../components/BenefitsBar.jsx'
import FeaturedDuo from '../components/FeaturedDuo.jsx'
import ImpressionParallax from '../components/ImpressionParallax.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import ShopCollection from '../components/ShopCollection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <FeaturedDuo />
      <ImpressionParallax />
      <PromoBanner />
      <ShopCollection />
    </>
  )
}
