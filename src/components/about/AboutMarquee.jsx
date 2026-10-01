const marqueeItems = Array.from({ length: 12 }, (_, index) => index);

export default function AboutMarquee() {
  const words = ["ELEGANCE", "PASSION", "CRAFTSMANSHIP", "LUXURY"];

  return (
    <section className="footer-marquee" aria-label="About page marquee">
      <div className="footer-marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="footer-marquee-text" key={`${item}-${index}`}>
            {words[index % words.length]}
            <span className="footer-marquee-line" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
