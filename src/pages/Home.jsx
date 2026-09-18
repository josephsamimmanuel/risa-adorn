import { useCallback, useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import CatalogGrid from '../components/CatalogGrid.jsx'
import CtaSection from '../components/CtaSection.jsx'
import { PRODUCTS, asset } from '../data/catalog'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  const { addedIds, onAddCart, loaderHidden } = useOutletContext()
  const [activeTab, setActiveTab] = useState('bangles')
  const setTab = useCallback((name) => setActiveTab(name), [])

  useReveal(loaderHidden)

  useEffect(() => {
    if (!loaderHidden) return undefined
    const revealHero = () => {
      document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('in'))
    }
    window.setTimeout(revealHero, 80)
  }, [loaderHidden])

  useEffect(() => {
    const onMove = (e) => {
      const heroImg = document.querySelector('.hero-img')
      if (!heroImg) return
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 14
      heroImg.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-blob"></div>
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow reveal" data-delay="0">— Learn · Create · Earn · Tenkasi</span>
            <h1 className="reveal" data-delay="100">Silkthread Bangles, Handmade to <span className="accent">Shine</span></h1>
            <p className="reveal" data-delay="300">From Tenkasi, Risa Adorn teaches silk-thread bangle making from home and crafts bridal-ready jewellery. Every woman — from school students to housewives — can learn, create, and shine.</p>
            <div className="hero-actions reveal" data-delay="500">
              <Link to="/products" className="btn btn-primary">Shop Now <i className="fa-solid fa-arrow-right"></i></Link>
              <Link to="/courses" className="btn btn-ghost">View Courses</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle"></div>
            <img src={asset('hero.webp')} alt="Stack of pink and gold silk-thread bangles" className="hero-img float" />
            <span className="dot d1"></span><span className="dot d2"></span><span className="dot d3"></span>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="section-head">
            <span className="script">Where Passion Meets Profession</span>
            <h2>Learn, Create &amp; Earn With <span className="accent">Every Thread</span></h2>
          </div>
          <div className="features-grid">
            <article className="feature-card reveal-up">
              <div className="feature-blob blob-pink"></div>
              <img src={asset('feature1.webp')} alt="Hands making a silk-thread bangle" />
              <span className="feature-tag">Learn From Home</span>
              <h3>Skill Academy</h3>
              <p>Pre-recorded lessons, practice sessions, and a WhatsApp doubt-clearance group — at your pace.</p>
              <Link to="/courses" className="link">See Courses <i className="fa-solid fa-arrow-right"></i></Link>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.15s' }}>
              <div className="feature-blob blob-green"></div>
              <img src={asset('feature2.webp')} alt="Bride wearing Risa Adorn bridal bangles" />
              <span className="feature-tag">Bridal &amp; Engagement</span>
              <h3>Handmade Atelier</h3>
              <p>Pre-book silk-thread sets for your special day — exclusive designs, comfort fit, made with love.</p>
              <Link to="/#about" className="link">Pre-Book <i className="fa-solid fa-arrow-right"></i></Link>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.3s' }}>
              <div className="feature-blob blob-orange"></div>
              <img src={asset('feature3.webp')} alt="Handmade hair accessories" />
              <span className="feature-tag">Learn · Create · Earn</span>
              <h3>Skill to Income</h3>
              <p>Make hair accessories and jewellery from home. Skill today, success tomorrow.</p>
              <Link to="/products" className="link">Shop More <i className="fa-solid fa-arrow-right"></i></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="indulge" id="about">
        <div className="container indulge-inner">
          <div className="indulge-image reveal-left">
            <img src={asset('indulge.webp')} alt="Risa Adorn artisan making silk-thread bangles" />
          </div>
          <div className="indulge-text reveal-right">
            <span className="script">Handmade with love</span>
            <h2>Every Bangle Tells a <span className="accent">Story</span></h2>
            <p>Designed for your memories. Risa Adorn crafts premium silk-thread bangles in Tenkasi — exclusive designs, perfect finishing, and a comfort fit. Pre-book engagement and bridal stacks, or learn the craft yourself from home.</p>
            <ul className="mini-benefits">
              <li><i className="fa-solid fa-gem"></i> Premium silk thread</li>
              <li><i className="fa-solid fa-star"></i> Exclusive designs</li>
              <li><i className="fa-solid fa-gift"></i> Free gift on early bridal bookings</li>
            </ul>
            <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20want%20to%20pre-book%20bridal%20bangles." className="btn btn-primary">Chat With Us <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section className="summer" id="learn">
        <div className="container summer-inner">
          <div className="summer-text reveal-left">
            <span className="script">Only for women</span>
            <h2>Learn From Home. <span className="accent">Earn Your Dream.</span></h2>
            <p>Beginner-friendly silk-thread training for school students to housewives. Recorded lessons, practice sessions, and WhatsApp doubt clearance — no age limit, no qualification required.</p>
            <p className="tamil-line">வீட்டிலிருந்தே கற்று, உங்கள் திறமையை வருமானமாக மாற்றுங்கள்.</p>
            <ul className="bullets">
              <li><i className="fa-solid fa-circle-check"></i> Lifetime access</li>
              <li><i className="fa-solid fa-circle-check"></i> WhatsApp doubt clearance</li>
              <li><i className="fa-solid fa-circle-check"></i> Learn at your own pace</li>
              <li><i className="fa-solid fa-circle-check"></i> Govt. registered certificate (extra)</li>
            </ul>
            <Link to="/courses" className="btn btn-primary">See All Courses <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="summer-visual reveal-right">
            <div className="summer-circle"></div>
            <img src={asset('summer.webp')} alt="Instructor demonstrating silk-thread bangle making" className="float" />
            <span className="bubble b1"></span><span className="bubble b2"></span><span className="bubble b3"></span>
          </div>
        </div>
      </section>

      <section className="flavors" id="shop">
        <div className="container">
          <div className="section-head">
            <span className="script">Made with passion</span>
            <h2>Jewels That <span className="accent">Steal</span> The Show</h2>
            <div className="tabs-bar">
              <button className={`tab tab-all${activeTab === 'all' ? ' active' : ''}`} type="button" onClick={() => setTab('all')}>All Products</button>
              <div className="tabs" id="tabs">
                <button className={`tab${activeTab === 'bangles' ? ' active' : ''}`} type="button" onClick={() => setTab('bangles')}>Bangles</button>
                <button className={`tab${activeTab === 'accessories' ? ' active' : ''}`} type="button" onClick={() => setTab('accessories')}>Accessories</button>
              </div>
            </div>
          </div>
          <CatalogGrid items={PRODUCTS} activeTab={activeTab} addedIds={addedIds} onAddCart={onAddCart} gridId="homeGrid" />
          <div className="shop-more-row">
            <Link to="/products" className="btn btn-ghost">View all products <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
