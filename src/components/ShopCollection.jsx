import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './ShopCollection.css'
import productimg1 from '../assets/productimg/1.png'
import productimg2 from '../assets/productimg/2.png'
import productimg3 from '../assets/productimg/3.png'
import productimg4 from '../assets/productimg/4.png'
import productimg5 from '../assets/productimg/5.jpeg'

const products = [
  {
    id: 1,
    name: 'THE LEGACY SET (4 × 20ML)',
    price: '₹1,899',
    mrp: '₹1,999',
    image: productimg1,
  },
  {
    id: 2,
    name: 'ORION (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg2,
  },
  {
    id: 3,
    name: 'NOBLE (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg3,
  },
  {
    id: 4,
    name: 'THRONE (100ML)',
    price: '₹1,999',
    mrp: '₹2,499',
    image: productimg4,
  },
  {
    id: 5,
    name: 'MYSTIQUE (50ML)',
    price: '₹1,099',
    mrp: '₹1,299',
    image: productimg5,
  },
  {
    id: 6,
    name: 'AURORA (100ML)',
    price: '₹1,499',
    mrp: '₹1,799',
    image: productimg1,
  },
  {
    id: 7,
    name: 'ECLIPSE (50ML)',
    price: '₹999',
    mrp: '₹1,199',
    image: productimg2,
  },
  {
    id: 8,
    name: 'VANGUARD (100ML)',
    price: '₹1,699',
    mrp: '₹2,199',
    image: productimg3,
  },
]

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
          540: { slidesPerView: 2, spaceBetween: 0 },
          900: { slidesPerView: 3, spaceBetween: 0 },
          1200: { slidesPerView: 4, spaceBetween: 0 },
        }}
        className="shop-swiper"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="product-card">
              <div className="product-image-wrap">
                <img src={p.image} alt={p.name} className="product-image" />
              </div>
              <p className="product-name">{p.name}</p>
              <p className="product-price">
                {p.price} <span className="product-mrp">{p.mrp}</span>
              </p>
              <button className="product-cta">Add To Cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
