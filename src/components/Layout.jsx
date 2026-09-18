import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { PAGE_TITLES, cartEnquiryText, waLink } from '../data/catalog'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [showLoader] = useState(() => window.location.pathname === '/')
  const [loaderHidden, setLoaderHidden] = useState(() => window.location.pathname !== '/')
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showToTop, setShowToTop] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [homeSection, setHomeSection] = useState('home')
  const [cart, setCart] = useState([])
  const [addedIds, setAddedIds] = useState({})
  const [leaveActive, setLeaveActive] = useState(false)

  const badgeRef = useRef(null)
  const addTimeouts = useRef({})

  const closeNav = () => setNavOpen(false)

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/']
  }, [location.pathname])

  useEffect(() => {
    if (!isHome) {
      window.scrollTo(0, 0)
      return
    }
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, isHome])

  useEffect(() => {
    if (loaderHidden) return undefined
    const onLoad = () => {
      window.setTimeout(() => setLoaderHidden(true), 1900)
    }
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [loaderHidden])

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 20)
      setShowToTop(window.scrollY > 400)
      if (!isHome) return
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top) current = sec.id
      })
      setHomeSection(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, location.pathname])

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="http"]')
      if (!a) return
      if (a.target === '_blank' || a.href.includes('wa.me')) return
      e.preventDefault()
      setLeaveActive(true)
      window.setTimeout(() => {
        window.location.href = a.href
      }, 750)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname, location.hash])

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

  const navClass = (name) => {
    if (location.pathname === '/products') return name === 'shop' ? 'active' : ''
    if (location.pathname === '/courses') return name === 'courses' ? 'active' : ''
    if (!isHome) return ''
    if (location.hash === '#about' || homeSection === 'about') return name === 'about' ? 'active' : ''
    if (location.hash === '#cta' || homeSection === 'cta') return name === 'cta' ? 'active' : ''
    return name === 'home' ? 'active' : ''
  }

  return (
    <>
      {showLoader && (
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
      )}

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><i className="fa-solid fa-location-dot"></i> Tenkasi Studio</span>
            <a href="https://wa.me/918778161826"><i className="fa-brands fa-whatsapp"></i> 87781 61826</a>
          </div>
          <div className="topbar-center">DEMO CLASS ₹29 · LEARN FROM HOME — <Link to="/courses">ENROLL NOW</Link></div>
          <div className="topbar-right"><i className="fa-solid fa-globe"></i> English</div>
        </div>
      </div>

      <header className={`header${headerScrolled ? ' scrolled' : ''}`} id="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <i className="fa-solid fa-crown"></i> Risa Adorn
          </Link>
          <nav className={`nav${navOpen ? ' open' : ''}`} id="nav">
            <Link to="/" className={navClass('home')} onClick={closeNav}>Home</Link>
            <Link to="/products" className={navClass('shop')} onClick={closeNav}>Products</Link>
            <Link to="/courses" className={navClass('courses')} onClick={closeNav}>Courses</Link>
            <Link to="/#about" className={navClass('about')} onClick={closeNav}>About</Link>
            <Link to="/#cta" className={navClass('cta')} onClick={closeNav}>Contact</Link>
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

      <Outlet context={{ addedIds, onAddCart, loaderHidden }} />

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <Link to="/" className="logo logo-light"><i className="fa-solid fa-crown"></i> Risa Adorn</Link>
            <p>Where passion meets profession. Handmade silk-thread bangles and from-home courses, crafted in Tenkasi.</p>
            <div className="socials">
              <a href="https://www.instagram.com/risa_adorn?utm_source=qr&stkn=MTVzcWV1NGh3dGJzZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://wa.me/918778161826" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/#about">About</Link>
            <Link to="/#cta">Contact</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="https://wa.me/918778161826">WhatsApp 87781 61826</a>
            <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20would%20like%20to%20enroll.">Enroll Now</a>
          </div>
        </div>
        <div className="footer-bottom container">
          <a
            className="footer-credit"
            href="https://www.instagram.com/jjcreation.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Designed and developed by JJ Creations on Instagram"
          >
            Designed and developed by JJ Creation <i className="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
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
