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
          At Ministry Perfume, we blend rare botanicals, exotic resins, and fine oils to create luxury
          scents that captivate every scene. Each bottle is designed with utmost precision, delivering rich
          olfactory depth and signature elegance for any occasion.
        </p>
        <hr className="wcu-divider" />
      </div>

      <img className="wcu-img-first" src={product1} alt="Product One" />
      <img className="wcu-img-second" src={product2} alt="Product Two" />

      <div className="wcu-features">
        <svg className="wcu-icon" viewBox="0 0 16 10" aria-hidden="true">
          <path d="M2 2l6 6 6-6" />
        </svg>
        <label className="wcu-feature-item"><input type="checkbox" defaultChecked /><span>Artisanal Formulations</span></label>
        <label className="wcu-feature-item"><input type="checkbox" defaultChecked /><span>Long-Lasting Projection</span></label>
        <label className="wcu-feature-item"><input type="checkbox" defaultChecked /><span>Certified Perfumers</span></label>
        <label className="wcu-feature-item"><input type="checkbox" defaultChecked /><span>Unbeatable Pricing</span></label>
      </div>
    </section>
  );
}
