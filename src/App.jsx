import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BenefitsBar from './components/BenefitsBar.jsx'
import FeaturedDuo from './components/FeaturedDuo.jsx'
import ImpressionParallax from './components/ImpressionParallax.jsx'
import ShopCollection from './components/ShopCollection.jsx'
import FooterMarquee from './components/FooterMarquee.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Header />
      <Hero />
      <BenefitsBar />
      <FeaturedDuo />
      <ImpressionParallax />
      <ShopCollection />
      <FooterMarquee />
      <Footer />
    </div>
  )
}
