import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import './Hero.css'
import heroBanner2 from '../assets/bnner/herobanner2.jpeg'
import heroBanner3 from '../assets/bnner/herobanner3.jpeg'

const IMAGES = [
  heroBanner2,
  heroBanner3
]

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {IMAGES.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
