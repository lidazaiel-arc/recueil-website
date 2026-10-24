
import { useState } from "react";
import "./App.css";

const images = {
  halo: "https://framerusercontent.com/images/vqDUiti0AUogX1iFZPQaVeuiks.png",
  ember: "https://framerusercontent.com/images/aA1k6uTWzUAS7PdwhmauSyS2wk.png",
  tide: "https://framerusercontent.com/images/SW1wU0ewx6JC9s22PitT0EQzb18.png",
  portrait: "https://framerusercontent.com/images/TU7BpZTzNA2q3ayegKLZ1F985g4.png",
  iris: "https://framerusercontent.com/images/ruDokhljnPDImAAxKqKBfl4bZI.png",
  cedar: "https://framerusercontent.com/images/8C08Iq04kEBJOG27tFVaxE0K9Bg.png",
  bergamot: "https://framerusercontent.com/images/BTZBQca24mCCPCCLKtpjsy9gM.png",
  saffron: "https://framerusercontent.com/images/2bPxLwXX1pc7q4VPYs8CIC0cYE.png",
  water: "https://framerusercontent.com/images/edhP9KDcxSx57ZN1bDKM2J0UMo.png",
  tea: "https://framerusercontent.com/images/nxXyFXGiz2DuJNL4uOrcUj9o7Q.png",
  member1: "https://framerusercontent.com/images/kM33NON21DUDnJfRtOykw68ljc.png",
  member2: "https://framerusercontent.com/images/64OB4OpkmqR054Hja2tYVy6YwWU.png",
};

const perfumes = [
  {
    name: "Halo",
    notes: "Iris · Cloud water · White cedar",
    description:
      "A soft, airy fragrance inspired by the calm that follows a spring rain.",
    image: images.halo,
    month: "01",
  },
  {
    name: "Ember",
    notes: "Amber · Vanilla · Saffron",
    description:
      "Warm and quietly rich, like the last light of the day on linen.",
    image: images.ember,
    month: "02",
  },
  {
    name: "Tide",
    notes: "Sea salt · Cypress · Bergamot",
    description:
      "Fresh coastal air with a clear, green and mineral character.",
    image: images.tide,
    month: "03",
  },
];

const ingredients = [
  {
    name: "Iris",
    latin: "Iris pallida",
    image: images.iris,
    position: "Heart note",
    origin: "Tuscan hills, Italy",
    description:
      "Powdery and earthy, with a soft floral character and a subtle violet finish.",
  },
  {
    name: "Atlas cedar",
    latin: "Cedrus atlantica",
    image: images.cedar,
    position: "Base note",
    origin: "Atlas Mountains",
    description:
      "Dry woods and gentle warmth bring structure and depth to a fragrance.",
  },
  {
    name: "Cloud water",
    latin: "A fresh accord",
    image: images.water,
    position: "Top note",
    origin: "Atelier composition",
    description:
      "An airy, transparent impression that feels clean, light and delicate.",
  },
  {
    name: "White tea",
    latin: "Tea-inspired accord",
    image: images.tea,
    position: "Heart note",
    origin: "Atelier composition",
    description:
      "A quiet, delicate green note with a clean and understated finish.",
  },
  {
    name: "Bergamot",
    latin: "Citrus bergamia",
    image: images.bergamot,
    position: "Top note",
    origin: "Mediterranean",
    description:
      "Bright citrus brings a sparkling freshness to the opening of a scent.",
  },
  {
    name: "Saffron",
    latin: "Crocus sativus",
    image: images.saffron,
    position: "Heart note",
    origin: "Selected growing regions",
    description:
      "A precious, gently spiced note that adds warmth and a golden nuance.",
  },
];

const plans = [
  {
    name: "Bi-monthly",
    detail: "One 8 ml bottle every other month",
    price: "22",
    features: [
      "A curated fragrance from the library",
      "A note from the perfumer",
      "Pause or cancel at any time",
    ],
  },
  {
    name: "Monthly",
    detail: "One new 8 ml bottle each month",
    price: "36",
    features: [
      "A new fragrance chosen for you",
      "Member price on full-size bottles",
      "Free fragrance swaps",
      "Access to seasonal releases",
    ],
    popular: true,
  },
  {
    name: "Duo",
    detail: "Two 8 ml bottles every month",
    price: "62",
    features: [
      "Two fragrances each month",
      "Build a collection more quickly",
      "Member price on full-size bottles",
      "Access to limited compositions",
    ],
  },
];

const questions = [
  {
    q: "How is my monthly fragrance selected?",
    a: "Your preferences guide the selection. Each delivery is chosen to help you discover new notes and fragrance styles over time.",
  },
  {
    q: "What if a fragrance is not right for me?",
    a: "Share your feedback so your preferences can guide future selections. The aim is to help you find scents you genuinely enjoy.",
  },
  {
    q: "Can I pause or cancel?",
    a: "The concept is designed to give members flexibility. Review the subscription terms before joining.",
  },
  {
    q: "Are the bottles refillable?",
    a: "The collection is designed around compact fragrance bottles. Check the specific product details for care and refill information.",
  },
  {
    q: "Where do you ship?",
    a: "Shipping destinations, delivery times and packaging details depend on the service available in your region.",
  },
];

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const activeIngredient = ingredients[selectedIngredient];

  function handleNewsletter(event) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <main className="site-shell" id="top">
      <div className="announcement">
        A NEW FRAGRANCE, EVERY MONTH
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top">recueil<span>®</span></a>

        <nav className="main-nav">
          <a href="#library">The library</a>
          <a href="#palette">The palette</a>
          <a href="#stories">Stories</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="header-cta" href="#pricing">
          Find your scent <span>↗</span>
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">THE ART OF DISCOVERY</p>
          <h1>Find your<br />own <em>scent.</em></h1>
          <p className="hero-description">
            A considered fragrance subscription. Explore a library
            of distinctive scents, one small bottle at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#pricing">
              Start your subscription <span>↗</span>
            </a>
            <a className="text-link" href="#how">Discover how it works ↓</a>
          </div>
          <div className="hero-note">
            <span className="status-dot" />
            A slower, more personal way to discover perfume
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={images.halo} alt="Iridescent fragrance bottle with lavender" />
          </div>
          <div className="hero-image-label">
            <span>SCENT NO. 01</span>
            <span>HALO — THE FIRST IMPRESSION</span>
          </div>
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
        </div>

        <div className="hero-side-note">A FRAGRANCE JOURNAL — VOL. 01</div>
      </section>

      <section className="metrics-strip">
        <div>
          <span className="metric-number">60<span>+</span></span>
          <p>Fragrances to explore</p>
        </div>
        <div>
          <span className="metric-number">8<span>ml</span></span>
          <p>A considered monthly size</p>
        </div>
        <div>
          <span className="metric-number">01</span>
          <p>A new discovery at a time</p>
        </div>
        <div>
          <span className="metric-number">∞</span>
          <p>Ways to find your signature</p>
        </div>
      </section>

      <section className="library-section section-pad" id="library">
        <div className="section-topline">
          <span className="eyebrow">01 — THE LIBRARY</span>
          <span className="muted-label">A ROTATING COLLECTION</span>
        </div>

        <div className="library-heading">
          <h2>From this month’s<br /><em>fragrance library.</em></h2>
          <p>
            A changing collection of compositions, chosen for their
            character, craftsmanship and the feeling they leave behind.
          </p>
        </div>

        <div className="perfume-grid">
          {perfumes.map((perfume) => (
            <article className="perfume-card" key={perfume.name}>
              <div className="perfume-image">
                <img src={perfume.image} alt={`${perfume.name} fragrance`} loading="lazy" />
                <span className="image-index">{perfume.month} / 03</span>
                <a className="image-plus" href="#pricing" aria-label={`Explore ${perfume.name}`}>↗</a>
              </div>
              <div className="perfume-meta">
                <div>
                  <h3>{perfume.name}</h3>
                  <p>{perfume.notes}</p>
                </div>
                <span className="rotation-tag">IN ROTATION</span>
              </div>
              <p className="perfume-description">{perfume.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="details-section section-pad" id="benefits">
        <div className="section-topline">
          <span className="eyebrow">02 — THE APPROACH</span>
          <span className="muted-label">SMALL DETAILS, CONSIDERED</span>
        </div>

        <div className="details-heading">
          <h2>Less noise.<br /><em>More nuance.</em></h2>
          <p>
            Fragrance should be discovered with curiosity, not rushed.
            Each detail is there to make the experience feel personal.
          </p>
        </div>

        <div className="detail-grid">
          <article className="detail-card detail-card-large">
            <div className="detail-image">
              <img src={images.portrait} alt="Fragrance creative surrounded by luminous florals" loading="lazy" />
            </div>
            <span className="eyebrow">A HUMAN TOUCH</span>
            <h3>Curated with<br /><em>intention.</em></h3>
            <p>Thoughtful selections put the craft and story behind each scent first.</p>
          </article>

          <article className="detail-card">
            <div className="detail-image detail-image-short">
              <img src={images.ember} alt="Warm glowing fragrance composition" loading="lazy" />
            </div>
            <span className="eyebrow">A LIVING LIBRARY</span>
            <h3>Room to<br /><em>discover.</em></h3>
            <p>Explore a changing palette instead of committing to just one fragrance.</p>
          </article>

          <article className="detail-card detail-card-quote">
            <span className="quote-mark">“</span>
            <blockquote>
              The best fragrance is not the loudest in the room. It is the one that feels like you.
            </blockquote>
            <span className="eyebrow">A NOTE FROM THE ATELIER</span>
          </article>
        </div>
      </section>

      <section className="palette-section section-pad" id="palette">
        <div className="section-topline">
          <span className="eyebrow">03 — THE PALETTE</span>
          <span className="muted-label">MATERIALS &amp; MEMORY</span>
        </div>

        <div className="palette-heading">
          <h2>Every scent begins<br />with <em>a note.</em></h2>
          <p>
            Explore a selection of fragrance ingredients and accords.
            Choose a note to discover its character and place in a composition.
          </p>
        </div>

        <div className="ingredient-layout">
          <div className="ingredient-list" role="tablist" aria-label="Fragrance ingredients">
            {ingredients.map((ingredient, index) => (
              <button
                className={`ingredient-tab ${selectedIngredient === index ? "active" : ""}`}
                key={ingredient.name}
                onClick={() => setSelectedIngredient(index)}
                role="tab"
                aria-selected={selectedIngredient === index}
              >
                <span className="ingredient-number">0{index + 1}</span>
                <span>{ingredient.name}</span>
                <span className="ingredient-arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="ingredient-feature" role="tabpanel">
            <div className="ingredient-image">
              <img src={activeIngredient.image} alt={activeIngredient.name} key={activeIngredient.name} />
              <span className="ingredient-image-caption">THE PERFUMER’S PALETTE</span>
            </div>
            <div className="ingredient-info">
              <span className="eyebrow">NOTE 0{selectedIngredient + 1}</span>
              <h3>{activeIngredient.name}</h3>
              <p className="ingredient-latin">{activeIngredient.latin}</p>
              <p>{activeIngredient.description}</p>
              <dl>
                <div><dt>POSITION</dt><dd>{activeIngredient.position}</dd></div>
                <div><dt>ORIGIN</dt><dd>{activeIngredient.origin}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section section-pad" id="stories">
        <div className="section-topline">
          <span className="eyebrow">04 — MEMBER STORIES</span>
          <span className="muted-label">PERSONAL BY NATURE</span>
        </div>

        <div className="stories-heading">
          <h2>Finding a scent<br />that feels <em>like you.</em></h2>
          <p>
            Every fragrance journey is different. Here are two imagined
            member profiles showing how a personal collection can grow.
          </p>
        </div>

        <div className="story-grid">
          <article className="story-card">
            <div className="story-photo">
              <img src={images.member1} alt="Portrait in a soft blue setting" loading="lazy" />
              <span className="story-counter">STORY / 01</span>
            </div>
            <div className="story-body">
              <span className="eyebrow">THE QUIET COLLECTOR</span>
              <h3>A signature found<br /><em>over time.</em></h3>
              <p>
                A gradual journey through delicate florals and softer
                notes, until one composition feels unmistakably familiar.
              </p>
              <div className="story-stat"><strong>04</strong><span>MONTHS OF DISCOVERY</span></div>
            </div>
          </article>

          <article className="story-card story-card-offset">
            <div className="story-photo">
              <img src={images.member2} alt="Portrait in an understated studio" loading="lazy" />
              <span className="story-counter">STORY / 02</span>
            </div>
            <div className="story-body">
              <span className="eyebrow">THE CURIOUS TRAVELLER</span>
              <h3>A wardrobe of<br /><em>many moods.</em></h3>
              <p>
                Fresh, woody, warm or unexpected: different bottles for
                different places, days and versions of yourself.
              </p>
              <div className="story-stat"><strong>11</strong><span>SCENTS EXPLORED</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="how-section section-pad" id="how">
        <div className="section-topline">
          <span className="eyebrow">05 — HOW IT WORKS</span>
          <span className="muted-label">THREE SIMPLE STEPS</span>
        </div>
        <div className="how-heading">
          <h2>Discover slowly.<br /><em>Wear thoughtfully.</em></h2>
          <p>A simple way to explore fragrance without filling your shelf with bottles you may never wear.</p>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-number">I</span>
            <h3>Tell us what<br />you gravitate to.</h3>
            <p>Share the notes, moods and memories you love through a short scent profile.</p>
            <span className="step-bottom">YOUR PROFILE ↗</span>
          </article>
          <article className="step-card">
            <span className="step-number">II</span>
            <h3>Meet a new<br />fragrance.</h3>
            <p>Receive a compact bottle selected from a varied library of compositions.</p>
            <span className="step-bottom">MONTHLY DELIVERY ↗</span>
          </article>
          <article className="step-card">
            <span className="step-number">III</span>
            <h3>Keep exploring<br />your preferences.</h3>
            <p>Discover what suits you, refine your profile and find new favourites along the way.</p>
            <span className="step-bottom">YOUR OWN PACE ↗</span>
          </article>
        </div>
      </section>

      <section className="pricing-section section-pad" id="pricing">
        <div className="section-topline">
          <span className="eyebrow">06 — SUBSCRIPTIONS</span>
          <span className="muted-label">CHOOSE YOUR RHYTHM</span>
        </div>
        <div className="pricing-heading">
          <h2>A little fragrance,<br /><em>on your terms.</em></h2>
          <p>Choose the pace that fits your life. Explore new compositions without the commitment of a full-size bottle.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.popular ? "price-card-featured" : ""}`} key={plan.name}>
              {plan.popular && <span className="popular-label">MOST POPULAR</span>}
              <span className="eyebrow">THE {plan.name.toUpperCase()} PLAN</span>
              <h3>{plan.name}</h3>
              <p className="plan-detail">{plan.detail}</p>
              <div className="price"><span>€</span>{plan.price}<small> / month</small></div>
              <div className="price-rule" />
              <ul>
                {plan.features.map((feature) => <li key={feature}><span>＋</span>{feature}</li>)}
              </ul>
              <a className={plan.popular ? "button button-dark" : "button button-outline"} href="mailto:hello@example.com?subject=Fragrance%20subscription">
                Choose this plan <span>↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-footnote">Demo pricing for this practice project. No subscription or payment is processed.</p>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="faq-intro">
          <span className="eyebrow">07 — GOOD TO KNOW</span>
          <h2>Before you<br /><em>take the plunge.</em></h2>
          <p>A few helpful answers about discovering and wearing fragrance.</p>
          <a className="text-link" href="mailto:hello@example.com">Still curious? Write to us ↗</a>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <article className={`faq-item ${openQuestion === index ? "faq-open" : ""}`} key={item.q}>
              <button
                className="faq-question"
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                aria-expanded={openQuestion === index}
              >
                <span className="faq-number">0{index + 1}</span>
                <span>{item.q}</span>
                <span className="faq-toggle">{openQuestion === index ? "−" : "+"}</span>
              </button>
              {openQuestion === index && <p className="faq-answer">{item.a}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="press-strip">
        <span className="eyebrow">A WORLD OF GOOD TASTE</span>
        <div className="press-names">
          <span>MONOCLE</span><span>cabana</span><span>KINFOLK</span>
          <span>LOAM</span><span>ATRIUM</span><span>VELLICHOR</span>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-copy">
          <span className="eyebrow">A LETTER FROM THE ATELIER</span>
          <h2>A quieter kind<br />of <em>inbox.</em></h2>
          <p>Occasional notes on fragrance, new discoveries and the art of choosing well.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleNewsletter}>
          <label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label>
          <div className="email-row">
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              required
            />
            <button type="submit" aria-label="Submit email">↗</button>
          </div>
          <p>{submitted ? "Thank you! This demo does not send or store emails." : "No noise. Unsubscribe whenever you like."}</p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#top">recueil<span>®</span></a>
            <p>A considered journey into the world of fragrance.</p>
          </div>
          <div className="footer-column">
            <span className="eyebrow">EXPLORE</span>
            <a href="#library">The library</a>
            <a href="#palette">The palette</a>
            <a href="#stories">Member stories</a>
          </div>
          <div className="footer-column">
            <span className="eyebrow">THE DETAILS</span>
            <a href="#how">How it works</a>
            <a href="#pricing">Subscriptions</a>
            <a href="#faq">Questions</a>
          </div>
          <div className="footer-column">
            <span className="eyebrow">SAY HELLO</span>
            <a href="mailto:hello@example.com">Email the atelier ↗</a>
            <a href="#top">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 RECUEIL — PRACTICE PROJECT</span>
          <span>MADE WITH CURIOSITY</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
