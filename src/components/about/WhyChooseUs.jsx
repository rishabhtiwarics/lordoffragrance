import './WhyChooseUs.css';
import product1 from '../../assets/productimg/1.png';
import product2 from '../../assets/productimg/2.png';

export default function WhyChooseUs() {
  return (
    <section className="wcu-wrapper">
      <div className="wcu-content">
        <span className="wcu-subtitle">Why Choose Us</span>
        <h2 className="wcu-headline">Our Professional Fragrance Craft</h2>
        <p className="wcu-description">
          At LORD OF FRAGRANCE, we blend rare botanicals, exotic resins, and fine oils to create luxury
          scents that captivate every scene. Each bottle is designed with utmost precision, delivering rich
          olfactory depth and signature elegance for any occasion.
        </p>
        <hr className="wcu-divider" />
      </div>

      <img className="wcu-img-first" src={product1} alt="Product One" />
      <img className="wcu-img-second" src={product2} alt="Product Two" />

      <div className="wcu-features">
        <h3 className="wcu-feature-heading">The LORD OF FRAGRANCE Standard</h3>
        <p className="wcu-feature-text">
          Every fragrance we craft is held to the highest standard of excellence. We ensure artisanal formulations, long-lasting projection, and an unforgettable olfactory experience. All created by certified perfumers to guarantee authenticity and luxury in every drop.
        </p>
      </div>
    </section>
  );
}
