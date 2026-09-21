import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './ShopCollection.css'

const products = [
  {
    id: 1,
    name: 'THE LEGACY SET (4 × 20ML)',
    price: '₹1,899',
    mrp: '₹1,999',
    image:
      'https://images.unsplash.com/photo-1758225502621-9102d2856dc8?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'ORION (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image:
      'https://images.unsplash.com/photo-1760920250029-36af9369a0bb?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'NOBLE (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image:
      'https://images.unsplash.com/photo-1584841247175-4d766cefa018?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'THRONE (100ML)',
    price: '₹1,999',
    mrp: '₹2,499',
    image:
      'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'MYSTIQUE (50ML)',
    price: '₹1,099',
    mrp: '₹1,299',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'AURORA (100ML)',
    price: '₹1,499',
    mrp: '₹1,799',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703bc48baf?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'ECLIPSE (50ML)',
    price: '₹999',
    mrp: '₹1,199',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'VANGUARD (100ML)',
    price: '₹1,699',
    mrp: '₹2,199',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
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
