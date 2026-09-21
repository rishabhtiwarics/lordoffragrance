import './FeaturedDuo.css'
import featuredimg1 from '../assets/FeaturedDuoimg/featuredimg1.jpeg'
import featuredimg2 from '../assets/FeaturedDuoimg/featuredimg2.jpeg'
import featuredimg3 from '../assets/FeaturedDuoimg/featuredimg3.jpeg'
import featuredimg4 from '../assets/FeaturedDuoimg/featuredimg4.jpeg'

const featuredItems = [
  {
    title: 'THRONE',
    subtitle: 'ABSOLUTE. DARK. UNRIVALLED.',
    image: featuredimg1,
  },
  {
    title: 'TUESDAY LONDON NOIR 9 EAU DE PARFUM 100ML',
    subtitle: 'SMOKY. BOLD. MYSTERIOUS.',
    image: featuredimg2,
  },
  {
    title: 'TUESDAY LONDON MAYFAIR 21 EAU DE PARFUM 100ML',
    subtitle: 'RICH. WARM. MAGNETIC.',
    image: featuredimg3,
  },
  {
    title: 'LEGACY',
    subtitle: 'TIMELESS. POWERFUL. DISTINCTIVE.',
    image: featuredimg4,
  },
]

const WideFeature = ({ item }) => (
  <article className="featured-duo-wide">
    <img src={item.image} alt={item.title} className="featured-duo-wide-img" />
    <div className="featured-duo-wide-content">
      <h2>{item.title}</h2>
      <p>{item.subtitle}</p>
      <a href="#shop" className="featured-duo-btn">
        EXPLORE PERFUME
      </a>
    </div>
  </article>
)

export default function FeaturedDuo() {
  const firstItem = featuredItems[0]
  const middleItems = featuredItems.slice(1, -1)
  const lastItem = featuredItems[featuredItems.length - 1]

  return (
    <section className="featured-duo">
      <WideFeature item={firstItem} />

      {middleItems.map((item) => (
        <article className="featured-duo-card" key={item.title}>
          <img src={item.image} alt={item.title} className="featured-duo-img" />
          <div className="featured-duo-content">
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <a href="#shop" className="featured-duo-btn">
              EXPLORE PERFUME
            </a>
          </div>
        </article>
      ))}

      <WideFeature item={lastItem} />
    </section>
  )
}