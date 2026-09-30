import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ProductDetails() {
  const { id } = useParams()
  const [qty, setQty] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)

  // Find product by id, default to first product
  const product = products.find(p => p.id === Number(id)) || products[0] || {}
  
  // State for hero image, initialized to the first image in array or the fallback image
  const [mainImg, setMainImg] = useState(product.images?.[0] || product.image)

  // Reset main image if product changes
  useEffect(() => {
    setMainImg(product.images?.[0] || product.image)
  }, [product.id])

  const handleQtyChange = (delta) => {
    setQty(prev => Math.max(1, prev + delta))
  }

  // Dynamic stars based on rating
  const rating = product.rating || 5
  const fullStars = Math.floor(rating)
  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      if (index < fullStars) {
        return (
          <svg key={index} fill="#111" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )
      } else if (index === fullStars && rating % 1 > 0) {
        return (
          <svg key={index} fill="#111" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            <path fill="#e5e7eb" d="M10 14.394V3.535a.8.8 0 00-.73-.807.8.8 0 00-.77.568L7.43 6.588a1 1 0 01-.95.69H3.018a1 1 0 00-.588 1.81l2.8 2.034a1 1 0 01.364 1.118l-1.07 3.292a1 1 0 001.539 1.118l2.8-2.034a1 1 0 011.12 0l.019.014z"></path>
          </svg>
        )
      } else {
        return (
          <svg key={index} fill="#e5e7eb" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )
      }
    })
  }

  // Show up to 4 images in the sub-images gallery (including the first one)
  const subImages = (product.images || []).slice(0, 4)

  return (
    <div className="shop-page-wrapper">
      <div className="shop-top-header" style={{ paddingBottom: '30px' }}>
        <div className="shop-breadcrumbs">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name || product.title || "Jasmine Bliss Premium"}</span>
        </div>
        <h1 className="shop-main-title">{product.name || product.title}</h1>
      </div>

      <div className="pd-main">
        {/* LEFT COLUMN: IMAGES */}
        <div className="pd-images-grid">
          <div className="pd-img-hero">
            <img src={mainImg} alt={product.name} />
          </div>
          {subImages.map((img, i) => (
            <div className="pd-img-sub" key={i} onClick={() => setMainImg(img)} style={{cursor: 'pointer'}}>
              <img src={img} alt={`Sub product ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: INFO */}
        <div className="pd-info-section">
          {product.tag && <div className="pd-tag-loved">{product.tag}</div>}
          
          <h1 className="pd-title">{product.name || product.title}</h1>
          
          <div className="pd-tags-row">
            {(product.tags || ['UNISEX', 'LEATHER', 'PARFUM']).map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <div className="pd-rating-row">
            <span className="stars">
              {renderStars()}
              <span style={{marginLeft: '8px'}}>{rating}</span>
            </span>
            <span className="stock-status" style={{ color: product.stockStatus === 'Out of Stock' ? '#dc2626' : (product.stockStatus === 'Few Left' ? '#ea580c' : '#16a34a') }}>
              <span className="dot" style={{ backgroundColor: product.stockStatus === 'Out of Stock' ? '#dc2626' : (product.stockStatus === 'Few Left' ? '#ea580c' : '#16a34a') }}></span> 
              {product.stockStatus || 'In Stock'}
            </span>
          </div>

          <div className="pd-price-row">
            <span className="price-current">{product.price}</span>
            {product.mrp && <span className="price-old">{product.mrp}</span>}
          </div>

          <p className="pd-shipping-note">
            {product.note || '* Ships within 24-36 hours of ordering.'}
          </p>

          <p className="pd-description" style={{ fontWeight: '500', color: '#111' }}>
            {product.shortDescription}
          </p>
          <p className="pd-description" style={{ marginTop: '-16px' }}>
            {product.longDescription || product.description}
          </p>

          <div className="pd-badges-row">
            {(product.badges || ['FLORAL', 'LOVED']).map((b, i) => (
              <span className="badge" key={i}>{b}</span>
            ))}
          </div>

          {product.offers && product.offers.length > 0 && (
            <>
              <h3 className="pd-offers-title">OFFERS</h3>
              <div className="pd-offers-slider-wrap" style={{ marginBottom: '24px' }}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={1}
                  navigation
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    }
                  }}
                  className="pd-offers-swiper"
                >
                  {product.offers.map((offer, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="pd-offer-card">
                        <div className="pd-offer-badge">{offer.badge}</div>
                        <div className="pd-offer-content">
                          <h4>{offer.title}</h4>
                          <p>{offer.desc}</p>
                          {offer.actionText && (
                            <p className="pd-applied-text">
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              {offer.actionText}
                            </p>
                          )}
                        </div>
                        <div className="pd-offer-img">
                          <img src={offer.image || mainImg} alt="Offer Product" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}

          <div className="pd-actions-row">
            <div className="pd-qty-selector">
              <button onClick={() => handleQtyChange(-1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => handleQtyChange(1)}>+</button>
            </div>
            <button className="pd-btn pd-btn-add">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Add to Cart
            </button>
            <button className="pd-btn pd-btn-buy">Buy Now</button>
          </div>

          <div className="pd-trust-grid">
            <div className="pd-trust-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Secure Transaction
            </div>
            <div className="pd-trust-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              Pay on Delivery
            </div>
            <div className="pd-trust-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Easy Order Tracking
            </div>
            <div className="pd-trust-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              Free Delivery
            </div>
          </div>

          {product.promoBanner && (
            <div className="pd-promo-banner">
              {product.promoBanner}
            </div>
          )}
        </div>
      </div>

      <div className="pd-faq-section">
        <h2 className="pd-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="pd-faq-list">
          {[
            { q: "Which fragrance should I choose?", a: "Each of our fragrances is designed for a unique personality. Explore our scent profiles to find your perfect match." },
            { q: "What's included in the Duo?", a: "The Duo set includes two 100ml Eau de Parfum bottles, beautifully paired for the ultimate experience." },
            { q: "What's included in the Trio?", a: "The Trio includes our three signature 100ml fragrances in a premium luxury box." },
            { q: "Is the Trio better value than buying individually?", a: "Yes! Buying the Trio saves you up to ₹1,500 compared to purchasing the bottles separately." },
            { q: "How many ml is each perfume?", a: "Our standard perfumes are 100ml, while our luxury editions are available in 20ml and 50ml." },
            { q: "Do you offer COD?", a: "Yes, Cash on Delivery is available for all orders across India." },
            { q: "How long does delivery take?", a: "Standard shipping takes 3-5 business days depending on your location." },
            { q: "What is your return policy?", a: "We offer a 7-day return policy for unopened items in their original packaging." },
            { q: "How can I track my order?", a: "Once shipped, you will receive a tracking link via email and SMS." }
          ].map((faq, idx) => (
            <div key={idx} className="pd-faq-item">
              <div className="pd-faq-header" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <span>{faq.q}</span>
                <span className="pd-faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && (
                <div className="pd-faq-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pd-signature-banner">
        <h2>READY TO FIND YOUR SIGNATURE?</h2>
        <div className="pd-signature-buttons">
          <Link to="/shop" className="pd-btn pd-btn-add">SHOP ALL FRAGRANCES</Link>
          <Link to="/shop" className="pd-btn pd-btn-buy">EXPLORE BUNDLES</Link>
        </div>
      </div>
    </div>
  )
}
