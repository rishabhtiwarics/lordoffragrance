import './FeaturedDuo.css'

const featuredItems = [
  {
    title: 'THRONE',
    subtitle: 'ABSOLUTE. DARK. UNRIVALLED.',
    image:
      'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2200&auto=format&fit=crop',
  },
  {
    title: 'TUESDAY LONDON NOIR 9 EAU DE PARFUM 100ML',
    subtitle: 'SMOKY. BOLD. MYSTERIOUS.',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'TUESDAY LONDON MAYFAIR 21 EAU DE PARFUM 100ML',
    subtitle: 'RICH. WARM. MAGNETIC.',
    image:
      'https://images.unsplash.com/photo-1595425970377-c9703bc48baf?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'LEGACY',
    subtitle: 'TIMELESS. POWERFUL. DISTINCTIVE.',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2200&auto=format&fit=crop',
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