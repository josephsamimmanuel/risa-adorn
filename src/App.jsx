import { useCallback, useEffect, useRef, useState } from 'react'

const CATALOG = [
  {
    category: 'bangles',
    bg: 'bg-pink',
    img: 'images/flavor4.webp',
    alt: 'Bridal maroon and gold silk-thread bangles',
    brand: 'Bridal Pre-Booking',
    title: 'Bridal Silk Thread Set',
    price: '₹1,499',
  },
  {
    category: 'bangles',
    bg: 'bg-rose',
    img: 'images/product5.webp',
    alt: 'Pink floral silk-thread bangles',
    brand: 'Everyday Festive',
    title: 'Pink Floral Kundan Stack',
    price: '₹899',
  },
  {
    category: 'bangles',
    bg: 'bg-peach',
    img: 'images/product6.webp',
    alt: 'Gold silk-thread bangles with pearls',
    brand: 'Champagne Silk',
    title: 'Gold Pearl Silk Bangles',
    price: '₹999',
  },
  {
    category: 'bangles',
    bg: 'bg-cream',
    img: 'images/flavor1.webp',
    alt: 'Colourful silk-thread bangle set',
    brand: 'Temple Colours',
    title: 'Traditional Multicolor Set',
    price: '₹799',
  },
  {
    category: 'accessories',
    bg: 'bg-pink',
    img: 'images/flavor2.webp',
    alt: 'Gold invisible-chain necklace with heart pendants',
    brand: 'Fine jewellery',
    title: 'Invisible Chain Necklace',
    price: '₹299',
  },
  {
    category: 'accessories',
    bg: 'bg-rose',
    img: 'images/feature3.webp',
    alt: 'Handmade floral hair clips on marble',
    brand: 'Handmade roses',
    title: 'Floral Hair Clip Set',
    price: '₹249',
  },
  {
    category: 'accessories',
    bg: 'bg-peach',
    img: 'images/flavor3.webp',
    alt: 'Kundan butterfly and bow hair accessories',
    brand: 'Party & bridal hair',
    title: 'Kundan Butterfly Barrette',
    price: '₹349',
  },
  {
    category: 'accessories',
    bg: 'bg-cream',
    img: 'images/product5.webp',
    alt: 'Pink floral silk-thread inspired custom accessory',
    brand: 'Made to match',
    title: 'Custom Hair Accessory',
    price: '₹199',
  },
  {
    category: 'courses',
    bg: 'bg-pink',
    img: 'images/flavor1.webp',
    alt: 'Colourful silk-thread bangles for the professional course',
    brand: 'Registration fees only',
    title: 'Professional Bangle Making',
    price: '₹799',
  },
  {
    category: 'courses',
    bg: 'bg-rose',
    img: 'images/flavor2.webp',
    alt: 'Gold invisible-chain necklace',
    brand: 'Master course',
    title: 'Invisible Chain Master',
    price: '₹299',
  },
  {
    category: 'courses',
    bg: 'bg-peach',
    img: 'images/flavor3.webp',
    alt: 'Handmade hair bows and clips',
    brand: 'Bows, clips & florals',
    title: 'Hair Accessories Course',
    price: '₹149',
  },
  {
    category: 'courses',
    bg: 'bg-cream',
    img: 'images/summer.webp',
    alt: 'Instructor demonstrating silk-thread bangle making',
    brand: '1-hour beginner intro',
    title: 'Live Demo Class',
    price: '₹29',
  },
]

const WA_NUMBER = '918778161826'
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

const productEnquiryText = (item) =>
  `Hi Risa Adorn, I would like to enquire about ${item.title} priced at ${item.price}.`

const cartEnquiryText = (items) => {
  if (!items.length) {
    return 'Hi Risa Adorn, I would like to place an order. Please share the latest catalogue and prices.'
  }
  const lines = items.map((item) =>
    item.qty > 1
      ? `• ${item.title} x${item.qty} — ${item.price}`
      : `• ${item.title} — ${item.price}`
  )
  return `Hi Risa Adorn, I would like to place an order.\n\n${lines.join('\n')}`
}

function App() {
  const [loaderHidden, setLoaderHidden] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showToTop, setShowToTop] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [activeTab, setActiveTab] = useState('bangles')
  const [cart, setCart] = useState([])
  const [addedIds, setAddedIds] = useState({})
  const [subscribed, setSubscribed] = useState(false)
  const [leaveActive, setLeaveActive] = useState(false)

  const badgeRef = useRef(null)
  const tabReady = useRef(false)
  const addTimeouts = useRef({})

  const setTab = useCallback((name) => setActiveTab(name), [])

  const closeNav = () => {
    setNavOpen(false)
  }

  useEffect(() => {
    document.querySelectorAll('[data-delay]').forEach((el) => {
      el.style.setProperty('--d', (el.dataset.delay || 0) + 'ms')
    })

    const revealHero = () => {
      document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('in'))
    }

    const onLoad = () => {
      window.setTimeout(() => setLoaderHidden(true), 1900)
      window.setTimeout(revealHero, 2000)
    }

    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right').forEach((el) => io.observe(el))

    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 20)
      setShowToTop(window.scrollY > 400)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top) current = sec.id
      })
      setActiveNav(current)
    }
    window.addEventListener('scroll', onScroll)

    const onMove = (e) => {
      const heroImg = document.querySelector('.hero-img')
      if (!heroImg) return
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 14
      heroImg.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('load', onLoad)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousemove', onMove)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!tabReady.current) {
      tabReady.current = true
      return
    }
    const cards = document.querySelectorAll('#flavorGrid .flavor-card')
    cards.forEach((c, i) => {
      const match = activeTab === 'all' || c.dataset.category === activeTab
      if (match) {
        c.style.animation = 'none'
        void c.offsetHeight
        c.style.animation = `cardIn .6s cubic-bezier(.6,.05,.2,1) ${i % 4 * 0.1}s backwards`
      }
    })
  }, [activeTab])

  useEffect(() => {
    const seeCourses = document.getElementById('seeCourses')
    const onSeeCourses = () => setTab('courses')
    if (seeCourses) seeCourses.addEventListener('click', onSeeCourses)

    const shopHandlers = []
    document.querySelectorAll('a[href="#shop"]').forEach((a) => {
      if (a.textContent.toLowerCase().includes('course') || a.textContent.toLowerCase().includes('demo')) {
        const handler = () => setTab('courses')
        a.addEventListener('click', handler)
        shopHandlers.push([a, handler])
      }
      if (a.textContent.toLowerCase().includes('hair')) {
        const handler = () => setTab('accessories')
        a.addEventListener('click', handler)
        shopHandlers.push([a, handler])
      }
    })

    const httpHandlers = []
    document.querySelectorAll('a[href^="http"]').forEach((a) => {
      const handler = (e) => {
        if (a.target === '_blank' || a.href.includes('wa.me')) return
        e.preventDefault()
        setLeaveActive(true)
        window.setTimeout(() => {
          window.location.href = a.href
        }, 750)
      }
      a.addEventListener('click', handler)
      httpHandlers.push([a, handler])
    })

    return () => {
      if (seeCourses) seeCourses.removeEventListener('click', onSeeCourses)
      shopHandlers.forEach(([a, handler]) => a.removeEventListener('click', handler))
      httpHandlers.forEach(([a, handler]) => a.removeEventListener('click', handler))
    }
  }, [setTab])

  const cartCount = cart.reduce((total, item) => total + item.qty, 0)
  const cartWhatsAppHref = waLink(cartEnquiryText(cart))

  const onAddCart = (e, item) => {
    e.stopPropagation()
    const key = `${item.category}-${item.title}`
    setCart((prev) => {
      const existing = prev.find((entry) => entry.key === key)
      if (existing) {
        return prev.map((entry) =>
          entry.key === key ? { ...entry, qty: entry.qty + 1 } : entry
        )
      }
      return [...prev, { key, title: item.title, price: item.price, qty: 1 }]
    })
    setAddedIds((prev) => ({ ...prev, [key]: true }))
    if (badgeRef.current) {
      badgeRef.current.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      )
    }
    window.clearTimeout(addTimeouts.current[key])
    addTimeouts.current[key] = window.setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [key]: false }))
    }, 1400)
  }

  return (
    <>
      <div className={`loader${loaderHidden ? ' hidden' : ''}`} id="loader">
        <div className="loader-bangles">
          <span className="loader-ring ring-1"></span>
          <span className="loader-ring ring-2"></span>
          <span className="loader-ring ring-3"></span>
        </div>
        <div className="loader-text">
          <span>R</span><span>i</span><span>s</span><span>a</span><span className="loader-space"></span><span>A</span><span>d</span><span>o</span><span>r</span><span>n</span>
        </div>
        <div className="loader-bar"><div className="loader-bar-fill"></div></div>
      </div>

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><i className="fa-solid fa-location-dot"></i> Tenkasi Studio</span>
            <a href="https://wa.me/918778161826"><i className="fa-brands fa-whatsapp"></i> 87781 61826</a>
          </div>
          <div className="topbar-center">DEMO CLASS ₹29 · LEARN FROM HOME — <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20enroll." target="_blank" rel="noopener noreferrer">ENROLL NOW</a></div>
          <div className="topbar-right"><i className="fa-solid fa-globe"></i> English</div>
        </div>
      </div>

      <header className={`header${headerScrolled ? ' scrolled' : ''}`} id="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <i className="fa-solid fa-crown"></i> Risa Adorn
          </a>
          <nav className={`nav${navOpen ? ' open' : ''}`} id="nav">
            <a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={closeNav}>Home</a>
            <a href="#shop" className={activeNav === 'shop' ? 'active' : ''} onClick={closeNav}>Shop</a>
            <a href="#courses" className={activeNav === 'courses' ? 'active' : ''} onClick={closeNav}>Courses</a>
            <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={closeNav}>About</a>
            <a href="#cta" className={activeNav === 'cta' ? 'active' : ''} onClick={closeNav}>Contact</a>
            <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20enroll." className="buy-now" onClick={closeNav}>Enroll Now</a>
          </nav>
          <div className="header-icons">
            <i className="fa-solid fa-magnifying-glass icon-desktop" aria-hidden="true"></i>
            <a
              className="icon-badge icon-cart"
              href={cartWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire about cart on WhatsApp"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              <span ref={badgeRef}>{cartCount > 0 ? cartCount : null}</span>
            </a>
            <button className={`hamburger${navOpen ? ' open' : ''}`} id="hamburger" aria-label="Open menu" onClick={() => setNavOpen((open) => !open)}><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-blob"></div>
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow reveal" data-delay="0">— Learn · Create · Earn · Tenkasi</span>
            <h1 className="reveal" data-delay="100">Silkthread Bangles, Handmade to <span className="accent">Shine</span></h1>
            <p className="reveal" data-delay="300">From Tenkasi, Risa Adorn teaches silk-thread bangle making from home and crafts bridal-ready jewellery. Every woman — from school students to housewives — can learn, create, and shine.</p>
            <div className="hero-actions reveal" data-delay="500">
              <a href="#shop" className="btn btn-primary">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#courses" className="btn btn-ghost">View Courses</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle"></div>
            <img src="images/hero.webp" alt="Stack of pink and gold silk-thread bangles" className="hero-img float" />
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
              <img src="images/feature1.webp" alt="Hands making a silk-thread bangle" />
              <span className="feature-tag">Learn From Home</span>
              <h3>Skill Academy</h3>
              <p>Pre-recorded lessons, practice sessions, and a WhatsApp doubt-clearance group — at your pace.</p>
              <a href="#courses" className="link">See Courses <i className="fa-solid fa-arrow-right"></i></a>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.15s' }}>
              <div className="feature-blob blob-green"></div>
              <img src="images/feature2.webp" alt="Bride wearing Risa Adorn bridal bangles" />
              <span className="feature-tag">Bridal &amp; Engagement</span>
              <h3>Handmade Atelier</h3>
              <p>Pre-book silk-thread sets for your special day — exclusive designs, comfort fit, made with love.</p>
              <a href="#about" className="link">Pre-Book <i className="fa-solid fa-arrow-right"></i></a>
            </article>
            <article className="feature-card reveal-up" style={{ '--d': '.3s' }}>
              <div className="feature-blob blob-orange"></div>
              <img src="images/feature3.webp" alt="Handmade hair accessories" />
              <span className="feature-tag">Learn · Create · Earn</span>
              <h3>Skill to Income</h3>
              <p>Make hair accessories and jewellery from home. Skill today, success tomorrow.</p>
              <a href="#shop" className="link">Shop More <i className="fa-solid fa-arrow-right"></i></a>
            </article>
          </div>
        </div>
      </section>

      <section className="indulge" id="about">
        <div className="container indulge-inner">
          <div className="indulge-image reveal-left">
            <img src="images/indulge.webp" alt="Risa Adorn artisan making silk-thread bangles" />
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

      <section className="summer" id="courses">
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
            <a href="#shop" className="btn btn-primary" id="seeCourses">See All Courses <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="summer-visual reveal-right">
            <div className="summer-circle"></div>
            <img src="images/summer.webp" alt="Instructor demonstrating silk-thread bangle making" className="float" />
            <span className="bubble b1"></span><span className="bubble b2"></span><span className="bubble b3"></span>
          </div>
        </div>
      </section>

      <section className="flavors" id="shop">
        <div className="container">
          <div className="section-head">
            <span className="script">Made &amp; taught with passion</span>
            <h2>Courses &amp; Jewels That <span className="accent">Steal</span> The Show</h2>
            <div className="tabs-bar">
              <button className={`tab tab-all${activeTab === 'all' ? ' active' : ''}`} data-tab="all" type="button" onClick={() => setTab('all')}>All Products</button>
              <div className="tabs" id="tabs">
                <button className={`tab${activeTab === 'bangles' ? ' active' : ''}`} data-tab="bangles" type="button" onClick={() => setTab('bangles')}>Bangles</button>
                <button className={`tab${activeTab === 'accessories' ? ' active' : ''}`} data-tab="accessories" type="button" onClick={() => setTab('accessories')}>Accessories</button>
                <button className={`tab${activeTab === 'courses' ? ' active' : ''}`} data-tab="courses" type="button" onClick={() => setTab('courses')}>Courses</button>
              </div>
            </div>
          </div>
          <div className="flavor-grid" id="flavorGrid">
            {CATALOG.map((item) => (
              <article
                key={`${item.category}-${item.title}`}
                className="flavor-card"
                data-category={item.category}
                hidden={activeTab !== 'all' && item.category !== activeTab}
              >
                <div className={`flavor-bg ${item.bg}`}></div>
                <img src={item.img} alt={item.alt} />
                <p className="brand">{item.brand}</p>
                <h4>{item.title}</h4>
                <span className="price">{item.price}</span>
                <a
                  className="add-cart"
                  href={waLink(productEnquiryText(item))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${item.title} on WhatsApp`}
                  onClick={(e) => onAddCart(e, item)}
                  style={addedIds[`${item.category}-${item.title}`] ? { background: '#2ecc71' } : undefined}
                >
                  <i className={`fa-solid ${addedIds[`${item.category}-${item.title}`] ? 'fa-check' : 'fa-bag-shopping'}`}></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="container cta-inner">
          <h2>Ready to Learn, Create &amp; <span className="accent">Earn?</span></h2>
          <p>Join women across Tamil Nadu building a beautiful skill — and a home income — with Risa Adorn, Tenkasi.</p>
          <form
            className="cta-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
          >
            <input type="email" placeholder="Enter your email" aria-label="Email" required />
            <button type="submit">{subscribed ? <><i className="fa-solid fa-check"></i> Subscribed</> : 'Subscribe'}</button>
          </form>
          <a className="cta-wa" href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20know%20about%20silk-thread%20bangles%20%2F%20courses."><i className="fa-brands fa-whatsapp"></i> Or WhatsApp 87781 61826</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a href="#home" className="logo logo-light"><i className="fa-solid fa-crown"></i> Risa Adorn</a>
            <p>Where passion meets profession. Handmade silk-thread bangles and from-home courses, crafted in Tenkasi.</p>
            <div className="socials">
              <a href="https://www.instagram.com/risa_adorn?utm_source=qr&stkn=MTVzcWV1NGh3dGJzZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fa-brands fa-pinterest"></i></a>
              <a href="https://wa.me/918778161826" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h5>Shop</h5>
            <a href="#shop">All Bangles</a>
            <a href="#about">Bridal Pre-Booking</a>
            <a href="#shop">Hair Accessories</a>
            <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20want%20a%20custom%20design.">Custom Designs</a>
          </div>
          <div>
            <h5>Academy</h5>
            <a href="#courses">Bangle Course</a>
            <a href="#shop">Invisible Chain</a>
            <a href="#shop">Hair Accessories Course</a>
            <a href="#shop">Demo Class ₹29</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="https://wa.me/918778161826">WhatsApp 87781 61826</a>
            <a href="#about">Tenkasi Studio</a>
            <a href="#cta">FAQ</a>
            <a href="#cta">Privacy</a>
          </div>
        </div>
        <div className="footer-bottom container">© 2026 Risa Adorn. All rights reserved. Handmade with love in Tenkasi.</div>
      </footer>

      <a className="wa-fab" href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20know%20about%20silk-thread%20bangles%20%2F%20courses." aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <button className={`to-top${showToTop ? ' show' : ''}`} id="toTop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <div className={`page-leave-overlay${leaveActive ? ' active' : ''}`}></div>
    </>
  )
}

export default App
