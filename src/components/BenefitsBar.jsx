import './BenefitsBar.css'

const Icon = ({ type }) => {
  if (type === 'tag') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <path d="M7.5 7.5h.01" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 19 6v5c0 4.6-2.8 8.6-7 10-4.2-1.4-7-5.4-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

  if (type === 'truck') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h12v10H3z" />
        <path d="M15 10h4l2 3v3h-6z" />
        <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  )
}

const benefits = [
  { icon: 'tag', title: 'Best Prices', text: 'Guaranteed' },
  { icon: 'shield', title: '100% Secure', text: 'Payments' },
  { icon: 'truck', title: 'Fast Delivery', text: 'Across India' },
  { icon: 'return', title: 'Easy Returns', text: 'Hassle Free' },
]

export default function BenefitsBar() {
  return (
    <section className="benefits-bar" aria-label="Store benefits">
      {benefits.map((benefit) => (
        <div className="benefit-item" key={benefit.title}>
          <span className="benefit-icon">
            <Icon type={benefit.icon} />
          </span>
          <span className="benefit-copy">
            <strong>{benefit.title}</strong>
            <span>{benefit.text}</span>
          </span>
        </div>
      ))}
    </section>
  )
}