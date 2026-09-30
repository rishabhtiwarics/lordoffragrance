import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from '../shop/ProductCard.jsx'
import { shopProducts } from '../../data/products.js'

export default function ShopCollection() {
  return (
    <section id="shop" className="shop-collection">
      <h2 className="shop-collection-title">SHOP THE COLLECTION</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          540:  { slidesPerView: 2, spaceBetween: 0 },
          900:  { slidesPerView: 3, spaceBetween: 0 },
          1200: { slidesPerView: 4, spaceBetween: 0 },
        }}
        className="shop-swiper"
      >
        {shopProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard variant="shop-collection" product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

