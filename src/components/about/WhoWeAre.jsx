import './WhoWeAre.css';
import leftImg from '../../assets/combooffer/combo2.jpeg';
import rightImg from '../../assets/FeaturedDuoimg/featuredimg4.jpeg';

export default function WhoWeAre() {
  return (
    <section className="whoweare-section">
      <img className="whoweare-img-left" src={leftImg} alt="Lord of Fragrance Hand-blended Perfume" />

      <div className="whoweare-content">
        <div className="whoweare-header">
          <h2 className="whoweare-title">Who We Are</h2>
          <p className="whoweare-desc">
            Since 2014, we've been hand-blending fragrances in small batches from a single atelier. Every bottle carries real ingredients, sourced responsibly, and a scent story built to last on skin, not just in the bottle.
          </p>
        </div>
        
        <div className="whoweare-bottom-row">
          <div className="whoweare-stats">
            <div className="whoweare-stat-block">
              <h3>Founded in Grasse, 2014</h3>
              <p>Started in a studio in the perfume capital of the world, working with local growers and distillers.</p>
            </div>
            
            <div className="whoweare-stat-block">
              <h3>60+ fragrances crafted since</h3>
              <p>Every formula is tested for months before release, worn on real skin across every season.</p>
            </div>
          </div>

          <img className="whoweare-img-right" src={rightImg} alt="Lord of Fragrance Studio" />
        </div>
      </div>
    </section>
  );
}
