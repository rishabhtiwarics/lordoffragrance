import FounderSection from '../components/about/FounderSection.jsx';
import AboutMarquee from '../components/about/AboutMarquee.jsx';
import WhoWeAre from '../components/about/WhoWeAre.jsx';
import WhyChooseUs from '../components/about/WhyChooseUs.jsx';
import shpDetailsBanner from '../assets/shpdetailsbnner.jpg';

export default function About() {
  return (
    <div>
      <FounderSection />
      <WhoWeAre />
      <AboutMarquee />
      <img src={shpDetailsBanner} alt="Promo Banner" className="shop-full-width-banner" />
      <WhyChooseUs />
    </div>
  )
}
