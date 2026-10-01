import './FounderSection.css';
import portraitImg from '../../assets/founderimgbgremove.png';
import bookImg from '../../assets/founderimg.jpg';

export default function FounderSection() {
  return (
    <div className="founder-section-wrapper">
      {/* SECTION 1 */}
      <section className="hero">
        <div className="intro">
          <h1 className="name">Neha<br />Tiwari</h1>
          <a className="btn light" href="#journey"><i></i>Let's dive into my journey</a>
          <div className="scroll"><b>&#8595;</b>Scroll down</div>
        </div>

        <div className="portrait-wrap">
          <img className="portrait" src={portraitImg} alt="Portrait of Neha Tiwari" />
          <div className="awards" aria-label="Awards">
            <em>Visionary<br />Leader<u>2024 - Present</u></em>
          </div>
        </div>

        <div className="pen">
          <span className="eyebrow">Our Philosophy</span>
          <p className="founder-desc">
            Welcome to Lord of Fragrance, where passion meets elegance. Every scent is meticulously crafted with the finest ingredients to leave a lasting impression. Experience the true essence of luxury in every bottle.
          </p>
          <small>Founder</small>
          <span>Neha<br />Tiwari</span>
        </div>

        <figure className="book">
          <figcaption>Our Vision</figcaption>
          <div className="book-img-wrapper">
            <img src={bookImg} alt="Lord of Fragrance Vision" />
            <span className="book-signature">Neha Tiwari</span>
          </div>
        </figure>
      </section>

      {/* SECTION 2 */}
      <section className="about" id="journey">
        <h2 className="title">Essence of<br />Elegance</h2>
        <a className="btn dark" href="#journey"><i></i>Let's dive into my journey</a>
        <p className="lead">Neha Tiwari is a passionate founder whose <mark>compelling vision and exquisite fragrances have</mark> touched customers around the world. With an unwavering commitment to artistry, she transforms rare ingredients into memorable sensory experiences.</p>
        <div className="more">
          <button className="play" aria-label="Play intro video"><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z"/></svg></button>
          <p>Know more about me<small>Narrated by Neha</small></p>
        </div>
      </section>
    </div>
  );
}
