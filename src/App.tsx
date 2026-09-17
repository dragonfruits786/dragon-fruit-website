import { useState } from 'react';
import './index.css';

const WHATSAPP_NUMBER = '923390142104';
const PHONE_DISPLAY = '0339 0142104';
const EMAIL = 'gragonfruits786@gmail.com';

const varieties = [
  {
    name: 'Yellow Dragon Fruit',
    badge: 'YELLOW',
    description:
      'Bright yellow skin, tropical character and a beautiful premium look for dragon fruit lovers.',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Pink Dragon Fruit',
    badge: 'PINK',
    description:
      'A colorful dragon fruit variety with striking pink tones and a fresh tropical presentation.',
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'White Dragon Fruit',
    badge: 'WHITE',
    description:
      'Classic dragon fruit with light flesh, refreshing taste and the iconic bright outer skin.',
    image:
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1000&q=85',
  },
];

const gallery = [
  {
    title: 'Fresh Dragon Fruit',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Urban Growing',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Healthy Plants',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Home Garden',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.7 11.7 0 0 0 5.4 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.1-3.5-8.4Zm-8.4 18.2h-.1c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.5 4.7Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Assalam o Alaikum, mujhe DRAGON FRUITS ke fruits aur plants ke bare mein information chahiye.'
  )}`;

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">🐉</span>
          <span className="brand-text">
            <strong>DRAGON FRUITS</strong>
            <small>FRUITS • PLANTS • URBAN GARDEN</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#varieties" onClick={closeMenu}>
            Varieties
          </a>
          <a href="#plants" onClick={closeMenu}>
            Plants
          </a>
          <a href="#growing" onClick={closeMenu}>
            Growing Guide
          </a>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-copy">
            <span className="eyebrow">LAHORE • PAKISTAN</span>
            <h1>
              Grow & enjoy
              <br />
              <em>DRAGON FRUITS.</em>
            </h1>
            <p>
              Discover beautiful dragon fruits and healthy dragon fruit plants
              for home gardens, rooftops, balconies and urban growing spaces.
            </p>

            <div className="hero-actions">
              <a href="#varieties" className="primary-button">
                Explore Fruits <ArrowIcon />
              </a>
              <a href="#plants" className="secondary-button">
                Shop Plants <ArrowIcon />
              </a>
            </div>

            <div className="hero-points">
              <span>🟡 Yellow</span>
              <span>🩷 Pink</span>
              <span>⚪ White</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=90"
                alt="Dragon fruit"
              />
              <div className="hero-card-caption">
                <small>DRAGON FRUITS</small>
                <strong>Fresh • Colorful • Tropical</strong>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              🌱 Healthy Plants
            </div>
            <div className="floating-card floating-card-two">
              🏡 Urban Garden
            </div>
          </div>
        </section>

        <section className="varieties-section section-container" id="varieties">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR FRUIT VARIETIES</span>
              <h2>
                Three beautiful
                <br />
                <em>dragon fruit colors.</em>
              </h2>
            </div>
            <p>
              Explore our selected Yellow, Pink and White dragon fruit
              varieties.
            </p>
          </div>

          <div className="fruit-grid">
            {varieties.map((fruit) => (
              <article className="fruit-card" key={fruit.name}>
                <div className="fruit-card-image">
                  <img src={fruit.image} alt={fruit.name} />
                  <span>{fruit.badge}</span>
                </div>
                <div className="fruit-card-content">
                  <h3>{fruit.name}</h3>
                  <p>{fruit.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Ask on WhatsApp <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="plants-section" id="plants">
          <div className="section-container plants-layout">
            <div className="plants-copy">
              <span className="section-label">DRAGON FRUIT PLANTS</span>
              <h2>
                Start your own
                <br />
                <em>dragon fruit garden.</em>
              </h2>
              <p>
                Bring the tropical look home with dragon fruit plants suitable
                for gardens, pots, rooftops and other urban growing spaces.
              </p>

              <div className="plant-features">
                <div>
                  <strong>🌵 Climbing cactus</strong>
                  <span>Perfect with a strong vertical support.</span>
                </div>
                <div>
                  <strong>☀️ Loves bright light</strong>
                  <span>A sunny location helps healthy growth.</span>
                </div>
                <div>
                  <strong>🏡 Urban friendly</strong>
                  <span>Can be managed in compact home spaces.</span>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Ask About Plants <WhatsAppIcon />
              </a>
            </div>

            <div className="plants-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=90"
                alt="Healthy garden plants"
              />
              <div className="plants-badge">
                <span>🌱</span>
                <strong>Grow at home</strong>
                <small>Lahore</small>
              </div>
            </div>
          </div>
        </section>

        <section className="growing-section section-container" id="growing">
          <div className="section-heading compact">
            <div>
              <span className="section-label">GROWING GUIDE</span>
              <h2>
                Simple care for
                <br />
                <em>strong healthy growth.</em>
              </h2>
            </div>
          </div>

          <div className="guide-grid">
            <article className="guide-card">
              <span>01</span>
              <div className="guide-icon">☀️</div>
              <h3>Sunlight</h3>
              <p>Choose a bright and sunny place for healthy plant growth.</p>
            </article>
            <article className="guide-card">
              <span>02</span>
              <div className="guide-icon">🪴</div>
              <h3>Well-drained soil</h3>
              <p>Use a growing medium that drains excess water efficiently.</p>
            </article>
            <article className="guide-card">
              <span>03</span>
              <div className="guide-icon">💧</div>
              <h3>Careful watering</h3>
              <p>
                Water when needed and avoid leaving the roots constantly wet.
              </p>
            </article>
            <article className="guide-card">
              <span>04</span>
              <div className="guide-icon">🪵</div>
              <h3>Strong support</h3>
              <p>Provide a sturdy post or trellis for the climbing plant.</p>
            </article>
          </div>
        </section>

        <section className="urban-section">
          <div className="section-container urban-layout">
            <div className="urban-image">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=90"
                alt="Urban home garden"
              />
            </div>

            <div className="urban-copy">
              <span className="section-label">URBAN GARDEN</span>
              <h2>
                Tropical growing,
                <br />
                <em>even in the city.</em>
              </h2>
              <p>
                Dragon fruit can become a standout feature in a rooftop,
                balcony, patio or compact home garden. Give it sunlight, strong
                support and consistent care.
              </p>
              <div className="urban-tags">
                <span>Rooftop</span>
                <span>Balcony</span>
                <span>Garden</span>
                <span>Pots</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section section-container" id="gallery">
          <div className="section-heading">
            <div>
              <span className="section-label">GALLERY</span>
              <h2>
                Fruits, plants &
                <br />
                <em>garden inspiration.</em>
              </h2>
            </div>
            <p>
              A colorful look at the world of dragon fruits and urban growing.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure
                className={
                  index === 0
                    ? 'gallery-item gallery-item-large'
                    : 'gallery-item'
                }
                key={`${item.title}-${index}`}
              >
                <img src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-section section-container" id="about">
          <div className="about-card">
            <span className="section-label">ABOUT US</span>
            <h2>
              Welcome to
              <br />
              <em>DRAGON FRUITS.</em>
            </h2>
            <p>
              We are based in Lahore and focus on dragon fruits, dragon fruit
              plants and practical urban gardening. Our goal is to help more
              people enjoy these beautiful tropical plants at home.
            </p>

            <div className="about-highlights">
              <span>📍 Lahore</span>
              <span>🌱 Dragon Fruit Plants</span>
              <span>🐉 Dragon Fruits</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-copy">
            <span className="section-label">CONTACT & ORDERS</span>
            <h2>
              Ready to grow
              <br />
              <em>something special?</em>
            </h2>
            <p>
              Contact DRAGON FRUITS for fruit and plant availability, details
              and order information.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
          </div>

          <div className="contact-details">
            <a href="tel:+923390142104" className="contact-item">
              <span>📞</span>
              <div>
                <small>CALL / WHATSAPP</small>
                <strong>{PHONE_DISPLAY}</strong>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="contact-item">
              <span>✉️</span>
              <div>
                <small>EMAIL</small>
                <strong>{EMAIL}</strong>
              </div>
            </a>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <small>LOCATION</small>
                <strong>Lahore, Pakistan</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <div className="footer-brand">
          <strong>DRAGON FRUITS</strong>
          <span>Fruits • Plants • Urban Garden</span>
        </div>

        <div className="social-links">
          <a
            href="https://youtube.com/@urbangarden786?si=WxtkLGcc-iIzoTXB"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/share/1Bet23mvfQ/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/dragonfruits786?stkn=dWRvZWdlNnpvZTQ5&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@dragonfruits146?_r=1&_t=ZS-99nIqlUFqVx"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>

        <p>© 2026 DRAGON FRUITS. Lahore, Pakistan.</p>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default App;
