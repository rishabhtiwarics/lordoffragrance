/**
 * Central product data — single source of truth.
 *
 * Each product has:
 *   image        → used by ShopCollection (productimg)
 *   featuredImage → used by FeaturedDuo   (FeaturedDuoimg)  [optional]
 *   wide          → FeaturedDuo: renders as full-width banner  [optional]
 *   title / subtitle → used by FeaturedDuo card text
 *   name / price / mrp → used by ShopCollection card text
 */

import featuredimg1 from '../assets/FeaturedDuoimg/featuredimg1.jpeg'
import featuredimg2 from '../assets/FeaturedDuoimg/featuredimg2.jpeg'
import featuredimg3 from '../assets/FeaturedDuoimg/featuredimg3.jpeg'
import featuredimg4 from '../assets/FeaturedDuoimg/featuredimg4.jpeg'

import productimg1 from '../assets/productimg/1.png'
import productimg2 from '../assets/productimg/2.png'
import productimg3 from '../assets/productimg/3.png'
import productimg4 from '../assets/productimg/4.png'
import productimg5 from '../assets/productimg/5.jpeg'

import comboimg1 from '../assets/combooffer/combo1.jpeg'
import comboimg2 from '../assets/combooffer/combo2.jpeg'

// ── All products ──────────────────────────────────────────────────────────────
export const products = [
  {
    id: 1,
    name: 'THRONE (100ML)',
    title: 'THRONE',
    subtitle: 'ABSOLUTE. DARK. UNRIVALLED.',
    price: '₹1,999',
    mrp: '₹2,499',
    image: productimg4,          // ShopCollection image
    featuredImage: featuredimg1, // FeaturedDuo image
    wide: true,                  // renders as wide banner in FeaturedDuo
  },
  {
    id: 2,
    name: 'NOIR 9 EAU DE PARFUM (100ML)',
    title: 'NOIR 9',
    subtitle: 'SMOKY. BOLD. MYSTERIOUS.',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg2,
    featuredImage: featuredimg2,
  },
  {
    id: 3,
    name: 'MAYFAIR 21 EAU DE PARFUM (100ML)',
    title: 'MAYFAIR 21',
    subtitle: 'RICH. WARM. MAGNETIC.',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg3,
    featuredImage: featuredimg3,
  },
  {
    id: 4,
    name: 'THE LEGACY SET (4 × 20ML)',
    title: 'LEGACY',
    subtitle: 'TIMELESS. POWERFUL. DISTINCTIVE.',
    price: '₹1,899',
    mrp: '₹1,999',
    image: productimg1,
    featuredImage: featuredimg4,
    wide: true,
  },
  {
    id: 5,
    name: 'NOBLE (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg3,
  },
  {
    id: 6,
    name: 'ORION (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg2,
  },
  {
    id: 7,
    name: 'MYSTIQUE (50ML)',
    price: '₹1,099',
    mrp: '₹1,299',
    image: productimg5,
  },
  {
    id: 8,
    name: 'AURORA (100ML)',
    price: '₹1,499',
    mrp: '₹1,799',
    image: productimg1,
  },
  {
    id: 9,
    name: 'LORD OF FRAGRANCE COMPLETE FRAGRANCE COLLECTION - TRIO',
    title: 'COMPLETE COLLECTION',
    subtitle: 'THE MASTERPIECE',
    description: 'Meet the complete Lord of Fragrance collection. Why choose one when you can experience all three? The Lord of Fragrance Complete Fragrance Collection brings together Mayfair 21, Noir 9 and Royal 17 in one premium trio. From the bold red identity...',
    price: '₹6,999.00',
    mrp: '₹8,499.00',
    image: productimg1,
    comboImage: comboimg1,
  },
  {
    id: 10,
    name: 'THE ULTIMATE DUO SET',
    title: 'ULTIMATE DUO',
    subtitle: 'PERFECT PAIRING',
    description: 'Experience the perfect harmony of our best-selling fragrances. This exclusive duo set is designed for those who appreciate the finer things in life.',
    price: '₹2,999.00',
    mrp: '₹3,499.00',
    image: productimg2,
    comboImage: comboimg2,
  }
]

// ── Derived slices ────────────────────────────────────────────────────────────

/** Products that appear in FeaturedDuo (have a featuredImage), in display order */
export const featuredProducts = products.filter((p) => p.featuredImage)

/** All products for ShopCollection slider */
export const shopProducts = products.filter((p) => !p.comboImage)

/** Products that appear in the ComboOffer section */
export const comboProducts = products.filter((p) => p.comboImage)

