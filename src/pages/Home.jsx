import Hero from '../components/home/Hero.jsx'
import BenefitsBar from '../components/home/BenefitsBar.jsx'
import FeaturedDuo from '../components/home/FeaturedDuo.jsx'
import ImpressionParallax from '../components/home/ImpressionParallax.jsx'
import PromoBanner from '../components/home/PromoBanner.jsx'
import ShopCollection from '../components/home/ShopCollection.jsx'

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
