import ProductCard from '../shop/ProductCard.jsx'
import { comboProducts } from '../../data/products.js'

export default function ComboOffer() {
  if (!comboProducts || comboProducts.length === 0) return null

  return (
    <section className="combo-offer-section">
      {comboProducts.map((product) => (
        <ProductCard key={product.id} variant="combo" product={product} />
      ))}
    </section>
  )
}
