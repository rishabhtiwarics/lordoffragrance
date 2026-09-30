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
    image: productimg4,
    featuredImage: featuredimg1,
    wide: true,
    images: [productimg4, featuredimg1, productimg2, productimg3], // 4 images
    tag: 'LOVED',
    tags: ['UNISEX', 'LEATHER', 'PARFUM'],
    badges: ['FLORAL', 'LOVED'],
    stockStatus: 'In Stock',
    rating: 4.2,
    shortDescription: 'Absolute, dark and unrivalled notes of woody depth.',
    longDescription: 'Throne is our most powerful fragrance, offering absolute dark and unrivalled notes of woody depth and leathery intensity for the bold at heart.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Get extra 5% off on prepaid orders',
    offers: [
      { badge: 'GIFT • INCLUDED', title: 'A MINI SURPRISE FOR YOU', desc: 'Get a 7ml Parfum with your order', actionText: 'APPLIED AT CHECKOUT', image: productimg5 },
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more 100ml Fragrances, save up to 15%', actionText: 'EXPLORE BUNDLES', image: comboimg1 }
    ]
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
    images: [productimg2, featuredimg2, productimg1], // 3 images
    tag: 'BESTSELLER',
    tags: ['MEN', 'SMOKY', 'EAU DE PARFUM'],
    badges: ['NIGHT', 'BOLD'],
    stockStatus: 'In Stock',
    rating: 4.5,
    shortDescription: 'Smoky, bold, and mysteriously crafted for night.',
    longDescription: 'Noir 9 represents the apex of nocturnal fragrance, merging smoky woods with subtle amber for a truly mysterious trail.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Get an extra 10% off with NOIR10',
    offers: [
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more 100ml Fragrances, save up to 15%', actionText: 'EXPLORE BUNDLES', image: comboimg2 }
    ]
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
    images: [productimg3, featuredimg3], // 2 images
    tag: 'NEW',
    tags: ['UNISEX', 'SPICY', 'EAU DE PARFUM'],
    badges: ['WARM', 'MAGNETIC'],
    stockStatus: 'Few Left',
    rating: 2.4,
    shortDescription: 'Rich and warm layers of magnetic allure.',
    longDescription: 'Mayfair 21 captures the warmth of an English evening, featuring magnetic notes of spices, amber, and light woods.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Free shipping on orders above ₹1,000',
    offers: [
      { badge: 'GIFT • INCLUDED', title: 'FREE SAMPLE', desc: 'Get a 2ml tester with your order', actionText: 'APPLIED AT CHECKOUT', image: productimg5 },
      { badge: 'DISCOUNT', title: 'FLAT 10%', desc: 'Use code FLAT10 on checkout', actionText: 'APPLY CODE', image: productimg3 },
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more 100ml Fragrances, save up to 15%', actionText: 'EXPLORE BUNDLES', image: comboimg1 }
    ]
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
    images: [productimg1], // 1 image
    tag: 'LIMITED',
    tags: ['UNISEX', 'COLLECTION', 'PARFUM'],
    badges: ['BESTSELLER', 'GIFTING'],
    stockStatus: 'Out of Stock',
    rating: 5.0,
    shortDescription: 'A timeless collection of our 4 most powerful scents.',
    longDescription: 'The Legacy Set is the ultimate introduction to Lord of Fragrance, featuring 4x20ml bottles of our absolute best sellers in one distinctive box.',
    note: '* Exclusive collection. Dispatches in 2 days.',
    promoBanner: 'Get extra 5% off on prepaid orders',
    offers: []
  },
  {
    id: 5,
    name: 'NOBLE (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg3,
    title: 'NOBLE',
    subtitle: 'ELEGANT. FRESH. REFINED.',
    images: [productimg3, productimg1, productimg2], // 3 images
    tag: 'NEW',
    tags: ['MEN', 'FRESH', 'EAU DE PARFUM'],
    badges: ['ELEGANT', 'EVERYDAY'],
    stockStatus: 'In Stock',
    rating: 4.1,
    shortDescription: 'Elegant, fresh and refined notes for everyday wear.',
    longDescription: 'Noble is a versatile and refined fragrance that brings together fresh citrus with light woody undertones, perfect for making a subtle yet memorable impression.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Buy any 2, get 10% off',
    offers: [
      { badge: 'DISCOUNT', title: 'FLAT 10%', desc: 'Use code FLAT10 on checkout', actionText: 'APPLY CODE', image: productimg3 }
    ]
  },
  {
    id: 6,
    name: 'ORION (100ML)',
    price: '₹1,299',
    mrp: '₹1,499',
    image: productimg2,
    title: 'ORION',
    subtitle: 'AQUATIC. CRISP. VIBRANT.',
    images: [productimg2, productimg4], // 2 images
    tag: 'TRENDING',
    tags: ['MEN', 'AQUATIC', 'PARFUM'],
    badges: ['SUMMER', 'FRESH'],
    stockStatus: 'Few Left',
    rating: 4.6,
    shortDescription: 'Aquatic and crisp, bringing a vibrant burst of energy.',
    longDescription: 'Orion captures the essence of the ocean breeze. With aquatic heart notes and a crisp, vibrant opening, it is your ultimate companion for the summer.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Free shipping on orders above ₹1,000',
    offers: [
      { badge: 'GIFT • INCLUDED', title: 'FREE SAMPLE', desc: 'Get a 2ml tester with your order', actionText: 'APPLIED AT CHECKOUT', image: productimg5 },
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more 100ml Fragrances, save up to 15%', actionText: 'EXPLORE BUNDLES', image: comboimg1 }
    ]
  },
  {
    id: 7,
    name: 'MYSTIQUE (50ML)',
    price: '₹1,099',
    mrp: '₹1,299',
    image: productimg5,
    title: 'MYSTIQUE',
    subtitle: 'FLORAL. SWEET. ENCHANTING.',
    images: [productimg5], // 1 image
    tag: 'LOVED',
    tags: ['WOMEN', 'FLORAL', 'EAU DE PARFUM'],
    badges: ['SWEET', 'DATE NIGHT'],
    stockStatus: 'In Stock',
    rating: 4.9,
    shortDescription: 'Floral and enchanting layers of sweet allure.',
    longDescription: 'Mystique is an enchanting floral fragrance that blends sweet jasmine with soft vanilla, creating an irresistible aura for your most special evenings.',
    note: '* Exclusive 50ml edition. Dispatches in 2 days.',
    promoBanner: 'Get extra 5% off on prepaid orders',
    offers: []
  },
  {
    id: 8,
    name: 'AURORA (100ML)',
    price: '₹1,499',
    mrp: '₹1,799',
    image: productimg1,
    title: 'AURORA',
    subtitle: 'BRIGHT. RADIANT. UPLIFTING.',
    images: [productimg1, productimg5, productimg3], // 3 images
    tag: 'LIMITED',
    tags: ['UNISEX', 'CITRUS', 'PARFUM'],
    badges: ['RADIANT', 'MORNING'],
    stockStatus: 'Out of Stock',
    rating: 4.4,
    shortDescription: 'Bright, radiant, and uplifting citrus harmony.',
    longDescription: 'Aurora embodies the first light of day. Its bright and uplifting citrus harmony invigorates the senses, leaving a trail of pure radiant energy.',
    note: '* Currently out of stock. Check back next week.',
    promoBanner: 'Sign up to get notified when back in stock',
    offers: [
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more 100ml Fragrances, save up to 15%', actionText: 'EXPLORE BUNDLES', image: comboimg1 }
    ]
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
    images: [comboimg1, productimg1, productimg2, productimg3], // 4 images
    tag: 'ULTIMATE',
    tags: ['TRIO', 'COLLECTION', 'PREMIUM'],
    badges: ['MASTERPIECE', 'LUXURY'],
    stockStatus: 'In Stock',
    rating: 4.8,
    shortDescription: 'The complete masterpiece trio.',
    longDescription: 'Meet the complete Lord of Fragrance collection. Why choose one when you can experience all three?',
    note: '* Premium packaging included.',
    promoBanner: 'Enjoy free premium shipping',
    offers: [
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'You save ₹1,500 by buying the trio', actionText: 'EXPLORE BUNDLES', image: comboimg1 }
    ]
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
    images: [comboimg2, productimg2, productimg4], // 3 images
    tag: 'GIFTING',
    tags: ['DUO', 'BESTSELLERS', 'PERFECT PAIR'],
    badges: ['EXCLUSIVE', 'LIMITED'],
    stockStatus: 'In Stock',
    rating: 4.0,
    shortDescription: 'The perfect harmony of our best-sellers.',
    longDescription: 'Experience the perfect harmony of our best-selling fragrances. This exclusive duo set is designed for those who appreciate the finer things in life.',
    note: '* Ships within 24-36 hours of ordering.',
    promoBanner: 'Get extra 5% off on prepaid orders',
    offers: [
      { badge: 'GIFT • INCLUDED', title: 'A MINI SURPRISE FOR YOU', desc: 'Get a 7ml Parfum with your order', actionText: 'APPLIED AT CHECKOUT', image: productimg5 },
      { badge: 'BUNDLE • SAVE', title: 'MORE FOR YOU', desc: 'Buy 2 or more sets, save up to 10%', actionText: 'EXPLORE BUNDLES', image: comboimg2 }
    ]
  }
]

// ── Derived slices ────────────────────────────────────────────────────────────

/** Products that appear in FeaturedDuo (have a featuredImage), in display order */
export const featuredProducts = products.filter((p) => p.featuredImage)

/** All products for ShopCollection slider */
export const shopProducts = products.filter((p) => !p.comboImage)

/** Products that appear in the ComboOffer section */
export const comboProducts = products.filter((p) => p.comboImage)

