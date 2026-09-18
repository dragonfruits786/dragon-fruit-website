import { useState } from 'react';
import './index.css';

const WHATSAPP_NUMBER = '923390142104';
const PHONE_DISPLAY = '0339 0142104';
const EMAIL = 'dragonfruits786@gmail.com';

const fruitInventory = [
  {
    name: 'Yellow Dragon Fruit',
    color: 'yellow',
    image: 'https://imglink.cc/cdn/0TQp1tsKSq.png',
    text: 'Fresh Yellow Dragon Fruit with a bright golden look.',
  },
  {
    name: 'Pink Dragon Fruit',
    color: 'pink',
    image: 'https://imglink.cc/cdn/kNuyZ7girR.png',
    text: 'Fresh Pink Dragon Fruit with a vibrant, premium appearance.',
  },
  {
    name: 'White Dragon Fruit',
    color: 'white',
    image: 'https://imglink.cc/cdn/B0aTt-islv.png',
    text: 'Fresh White Dragon Fruit with a classic refreshing profile.',
  },
];

const plantInventory = [
  {
    name: 'Pink Dragon Fruit Plant',
    color: 'pink',
    image: 'https://imglink.cc/cdn/0W2NGHSszl.png',
    text: 'Healthy Pink Dragon Fruit plant for home, balcony and rooftop gardens.',
  },
  {
    name: 'Yellow Dragon Fruit Plant',
    color: 'yellow',
    image: 'https://imglink.cc/cdn/hGyQz8xS0l.png',
    text: 'Healthy Yellow Dragon Fruit plant for urban and home gardens.',
  },
  {
    name: 'White Dragon Fruit Plant',
    color: 'white',
    image: 'https://imglink.cc/cdn/D8jsGvV1f3.png',
    text: 'Healthy White Dragon Fruit plant for home and rooftop growing.',
  },
];

const socials = [
  ['YouTube', 'https://youtube.com/@urbangarden786?si=WxtkLGcc-iIzoTXB'],
  ['Facebook', 'https://www.facebook.com/share/1Bet23mvfQ/?mibextid=wwXIfr'],
  [
    'Instagram',
    'https://www.instagram.com/dragonfruits786?stkn=dWRvZWdlNnpvZTQ5&utm_source=qr',
  ],
  ['TikTok', 'https://www.tiktok.com/@dragonfruits146?_r=1&_t=ZS-99nIqlUFqVx'],
];

function whatsapp(
  message = 'Assalam o Alaikum, mujhe Dragon Fruits ke fruits aur plants ke bare mein maloomat chahiye.'
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="nav">
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brand-mark">🐉</span>
          <span>
            DRAGON <b>FRUITS</b>
          </span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>

          <a href="#inventory" onClick={() => setMenu(false)}>
            Fruit Inventory
          </a>

          <a href="#plants" onClick={() => setMenu(false)}>
            Plant Inventory
          </a>

          <a href="#guide" onClick={() => setMenu(false)}>
            Growing Guide
          </a>

          <a href="#gallery" onClick={() => setMenu(false)}>
            Gallery
          </a>

          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>

          <a
            className="nav-order"
            href={whatsapp(
              'Assalam o Alaikum, mujhe Dragon Fruits ke products order karne hain.'
            )}
          >
            WhatsApp Order
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">🌱 FRUIT • PLANTS • URBAN GARDEN</span>

            <h1>
              Grow Something <em>Extraordinary </em> with Dragon Fruit.
            </h1>

            <p>
              Premium Dragon Fruits aur healthy dragon fruit plants — Lahore
              mein urban gardens, rooftops aur home growers ke liye.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#inventory">
                Explore Fruits <span>→</span>
              </a>

              <a className="btn secondary" href="#plants">
                Shop Plants
              </a>
            </div>

            <div className="trust-row">
              <span>✓ 3 Fruit Varieties</span>
              <span>✓ 3 Plant Varieties</span>
              <span>✓ Lahore</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-badge">
              FRESH
              <br />
              <b>DRAGON FRUIT</b>
            </div>

            <img src="/images/pink-dragon-fruit.jpg" alt="Pink Dragon Fruit" />
          </div>
        </section>

        {/* FRUIT INVENTORY */}
        <section id="inventory" className="section inventory-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">FRUIT INVENTORY</span>

              <h2>
                Choose Your <span>Variety</span>
              </h2>
            </div>

            <p>
              Pink, Yellow aur White Dragon Fruit varieties alag-alag cards mein
              available hain.
            </p>
          </div>

          <div className="inventory-grid">
            {fruitInventory.map((item) => (
              <article className={`product-card ${item.color}`} key={item.name}>
                <div className="product-photo">
                  <img src={item.image} alt={item.name} />

                  <span className="variety-dot" />
                </div>

                <div className="product-info">
                  <span className="product-type">FRESH FRUIT</span>

                  <h3>{item.name}</h3>

                  <p>{item.text}</p>

                  <div className="product-bottom">
                    <strong>Price on Request</strong>

                    <a
                      href={whatsapp(
                        `Assalam o Alaikum, mujhe ${item.name} ka price aur availability chahiye.`
                      )}
                    >
                      Order →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PLANT INVENTORY */}
        <section id="plants" className="plant-inventory section">
          <div className="section-head light-head">
            <div>
              <span className="eyebrow light">PLANT INVENTORY</span>

              <h2>
                Dragon Fruit <span>Plants</span>
              </h2>
            </div>

            <p>
              Pink, Yellow aur White varieties ke healthy plants home aur
              rooftop gardens ke liye.
            </p>
          </div>

          <div className="inventory-grid plant-grid">
            {plantInventory.map((item) => (
              <article
                className={`product-card plant-card ${item.color}`}
                key={item.name}
              >
                <div className="product-photo">
                  <img src={item.image} alt={item.name} />

                  <span className="plant-badge">PLANT</span>
                </div>

                <div className="product-info">
                  <span className="product-type">DRAGON FRUIT PLANT</span>

                  <h3>{item.name}</h3>

                  <p>{item.text}</p>

                  <div className="product-bottom">
                    <strong>Price on Request</strong>

                    <a
                      href={whatsapp(
                        `Assalam o Alaikum, mujhe ${item.name} order karna hai. Price aur availability batayein.`
                      )}
                    >
                      Order →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="plant-support">
            <div>
              <span>🌿</span>
              <b>Healthy Plants</b>
              <small>Home & rooftop gardening</small>
            </div>

            <div>
              <span>✂️</span>
              <b>Quality Cuttings</b>
              <small>Available on request</small>
            </div>

            <div>
              <span>🪴</span>
              <b>Pot Ready Options</b>
              <small>Growing guidance available</small>
            </div>
          </div>
        </section>

        {/* GROWING GUIDE */}
        <section id="guide" className="section guide">
          <div className="section-head center">
            <span className="eyebrow">GROWING GUIDE</span>

            <h2>
              Dragon Fruit ko <span>Healthy</span> Rakhein
            </h2>
          </div>

          <div className="guide-grid">
            {[
              [
                '☀️',
                'Sunlight',
                'Bright sunlight aur open space growth ko support karta hai.',
              ],
              [
                '🪴',
                'Soil',
                'Well-draining soil aur achi drainage wala pot choose karein.',
              ],
              [
                '💧',
                'Watering',
                'Pani dein, lekin soil ko continuously waterlogged na rakhein.',
              ],
              [
                '🪵',
                'Support',
                'Strong trellis ya support climbing growth ke liye zaroori hai.',
              ],
            ].map(([icon, title, text]) => (
              <div className="guide-card" key={title}>
                <div className="guide-icon">{icon}</div>

                <h3>{title}</h3>

                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* URBAN GARDEN */}
        <section className="urban">
          <div className="urban-copy">
            <span className="eyebrow light">URBAN GARDEN</span>

            <h2>
              Small Space.
              <br />
              <span>Big Harvest.</span>
            </h2>

            <p>
              Rooftop, balcony ya backyard — sahi support aur care ke saath
              Dragon Fruit ko urban space mein bhi grow kiya ja sakta hai.
            </p>

            <a className="btn light-btn" href="#contact">
              Get in Touch →
            </a>
          </div>

          <div className="urban-art">
            <img
              src="https://imglink.cc/cdn/A5A8CHZeBj.jpg"
              alt="Dragon Fruit Plant"
            />
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section">
          <div className="section-head center">
            <span className="eyebrow">GALLERY</span>

            <h2>
              From Our <span>Garden</span>
            </h2>
          </div>

          <div className="gallery-grid">
            <img src="https://imglink.cc/cdn/lx4OvwcksZ.jpg" alt="Pink Dragon Fruit" />

            <img
              src="https://imglink.cc/cdn/C7XmoFqFBO.jpg"
              alt="Yellow Dragon Fruit"
            />

            <img
              src="https://imglink.cc/cdn/tw0bOJw3xl.jpg"
              alt="Dragon Fruit Plant"
            />

            <img
              src="https://imglink.cc/cdn/ZTZYKmBCMq.jpg"
              alt="White Dragon Fruit"
            />

            <img
              src="https://imglink.cc/cdn/Mh1TKZaf22.jpg"
              alt="Dragon Fruit Cuttings"
            />

            <img
              src="https://imglink.cc/cdn/0NxBA2y4LC.png"
              alt="Young Dragon Fruit Plants"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="about">
          <div>
            <span className="eyebrow">ABOUT DRAGON FRUITS</span>

            <h2>
              Fresh Fruit. Healthy Plants.
              <span> Better Gardens.</span>
            </h2>
          </div>

          <p>
            DRAGON FRUITS ka focus quality dragon fruits aur healthy plants ko
            fruit lovers aur home gardeners tak pohanchana hai. Lahore se urban
            gardening ko simple, colorful aur enjoyable banane ka maqsad hai.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="contact-card">
            <div>
              <span className="eyebrow">CONTACT US</span>

              <h2>Ready to Grow?</h2>

              <p>
                Fruit varieties, plants ya order ke liye humse rabta karein.
              </p>
            </div>

            <div className="contact-details">
              <a href={`tel:${WHATSAPP_NUMBER}`}>
                📞
                <span>
                  <small>Call / WhatsApp</small>

                  {PHONE_DISPLAY}
                </span>
              </a>

              <a href={`mailto:${EMAIL}`}>
                ✉️
                <span>
                  <small>Email</small>

                  {EMAIL}
                </span>
              </a>

              <div>
                📍
                <span>
                  <small>Location</small>
                  Lahore, Pakistan
                </span>
              </div>
            </div>

            <a className="btn primary big" href={whatsapp()}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <a className="brand" href="#home">
            <span className="brand-mark">🐉</span>

            <span>
              DRAGON <b>FRUITS</b>
            </span>
          </a>

          <p>Dragon Fruits & Plants • Lahore</p>

          <div className="socials">
            {socials.map(([name, url]) => (
              <a href={url} target="_blank" rel="noreferrer" key={name}>
                {name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} DRAGON FRUITS. All rights reserved.
          </span>

          <a href={whatsapp()}>WhatsApp</a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a className="floating-wa" href={whatsapp()} aria-label="WhatsApp">
        💬
      </a>
    </div>
  );
}
