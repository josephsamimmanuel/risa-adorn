import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection.jsx'
import { COURSES, asset, enrollText, waLink } from '../data/catalog'
import { useReveal } from '../hooks/useReveal'

export default function Courses() {
  useReveal([])

  return (
    <>
      <section className="page-hero">
        <div className="hero-blob"></div>
        <div className="container page-hero-inner">
          <div className="page-hero-text">
            <span className="script reveal" data-delay="0">Only for women · Learn from home</span>
            <h1 className="reveal" data-delay="100">Learn From Home. <span className="accent">Earn</span> Your Dream.</h1>
            <p className="reveal" data-delay="250">Beginner-friendly silk-thread training for school students to housewives. Recorded lessons, practice sessions, and WhatsApp doubt clearance — no age limit, no qualification required.</p>
            <p className="tamil-line reveal" data-delay="320">வீட்டிலிருந்தே கற்று, உங்கள் திறமையை வருமானமாக மாற்றுங்கள்.</p>
            <a
              href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20enroll."
              className="btn btn-primary reveal"
              data-delay="400"
            >
              Enroll on WhatsApp <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="page-hero-visual reveal-right">
            <img src={asset('courses-hero.webp')} alt="Woman learning silk-thread bangle making at a home table" />
          </div>
        </div>
      </section>

      <section className="course-offerings" id="course-list">
        <div className="container">
          <div className="section-head">
            <span className="script">Risa Adorn Skill Academy</span>
            <h2>Four Ways to <span className="accent">Start</span></h2>
          </div>
          <div className="course-list">
            {COURSES.map((course, index) => (
              <article className={`course-panel reveal-up${index % 2 ? ' course-panel-alt' : ''}`} key={course.title} style={{ '--d': `${index * 0.08}s` }}>
                <div className="course-panel-media">
                  <img src={course.img} alt={course.alt} />
                </div>
                <div className="course-panel-body">
                  <p className="brand">{course.brand}</p>
                  <h3>{course.title}</h3>
                  <span className="course-panel-price">{course.price}</span>
                  <p className="course-audience">{course.audience}</p>
                  <p>{course.blurb}</p>
                  <ul className="course-inclusions">
                    {course.inclusions.map((line) => (
                      <li key={line}><i className="fa-solid fa-circle-check"></i> {line}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn-primary"
                    href={waLink(enrollText(course))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll on WhatsApp <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-head">
            <span className="script">Why learn with us</span>
            <h2>Skill Today, Success <span className="accent">Tomorrow</span></h2>
          </div>
          <div className="features-grid">
            <article className="feature-card reveal-up">
              <div className="feature-blob blob-pink"></div>
              <img src={asset('feature1.webp')} alt="Hands making a silk-thread bangle" />
              <span className="feature-tag">Lifetime access</span>
              <h3>Learn at Your Pace</h3>
              <p>Pre-recorded lessons stay with you. Pause, rewind, and practise whenever you have free time at home.</p>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.15s' }}>
              <div className="feature-blob blob-green"></div>
              <img src={asset('course-demo.webp')} alt="Women learning together in a live demo class" />
              <span className="feature-tag">WhatsApp group</span>
              <h3>Doubt Clearance</h3>
              <p>Ask questions, share your practice work, and get guidance without leaving home.</p>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.3s' }}>
              <div className="feature-blob blob-orange"></div>
              <img src={asset('feature3.webp')} alt="Handmade hair accessories" />
              <span className="feature-tag">Learn · Create · Earn</span>
              <h3>Skill to Income</h3>
              <p>Make jewellery and hair accessories from home — useful for personal wear, gifting, and first orders.</p>
              <Link to="/products" className="link">Shop the atelier <i className="fa-solid fa-arrow-right"></i></Link>
            </article>
          </div>
        </div>
      </section>

      <CtaSection headingId="course-cta" />
    </>
  )
}
