import ProductCard from '../shop/ProductCard.jsx'
import { featuredProducts } from '../../data/products.js'

export default function FeaturedDuo() {
  const firstItem  = featuredProducts[0]
  const middleItems = featuredProducts.slice(1, -1)
  const lastItem   = featuredProducts[featuredProducts.length - 1]

  return (
    <section className="featured-duo">
      <ProductCard
        variant="featured-wide"
        product={{ ...firstItem, image: firstItem.featuredImage }}
      />

      {middleItems.map((product) => (
        <ProductCard
          key={product.id}
          variant="featured"
          product={{ ...product, image: product.featuredImage }}
        />
      ))}

      <ProductCard
        variant="featured-wide"
        product={{ ...lastItem, image: lastItem.featuredImage }}
      />
    </section>
  )
}
