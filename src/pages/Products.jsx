import { useCallback, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CatalogGrid from '../components/CatalogGrid.jsx'
import { PRODUCTS, asset } from '../data/catalog'
import { useReveal } from '../hooks/useReveal'

export default function Products() {
  const { addedIds, onAddCart } = useOutletContext()
  const [activeTab, setActiveTab] = useState('all')
  const setTab = useCallback((name) => setActiveTab(name), [])

  useReveal([])

  return (
    <>
      <section className="page-hero">
        <div className="hero-blob"></div>
        <div className="container page-hero-inner">
          <div className="page-hero-text">
            <span className="script reveal" data-delay="0">Handmade atelier · Tenkasi</span>
            <h1 className="reveal" data-delay="100">Jewels That <span className="accent">Steal</span> The Show</h1>
            <p className="reveal" data-delay="250">Bridal silk-thread stacks, everyday festive bangles, invisible-chain jewellery, and handmade hair accessories — crafted in Tenkasi and confirmed on WhatsApp.</p>
            <a
              href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20want%20a%20custom%20design."
              className="btn btn-primary reveal"
              data-delay="400"
            >
              Custom design on WhatsApp <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="page-hero-visual reveal-right">
            <img src={asset('products-hero.webp')} alt="Stacks of magenta, gold, and ivory silk-thread bangles" />
          </div>
        </div>
      </section>

      <section className="flavors" id="catalog">
        <div className="container">
          <div className="section-head">
            <span className="script">Shop silk-thread jewellery</span>
            <h2>Bangles &amp; Accessories <span className="accent">Made</span> to Shine</h2>
            <div className="tabs-bar">
              <button className={`tab tab-all${activeTab === 'all' ? ' active' : ''}`} type="button" onClick={() => setTab('all')}>All Products</button>
              <div className="tabs">
                <button className={`tab${activeTab === 'bangles' ? ' active' : ''}`} type="button" onClick={() => setTab('bangles')}>Bangles</button>
                <button className={`tab${activeTab === 'accessories' ? ' active' : ''}`} type="button" onClick={() => setTab('accessories')}>Accessories</button>
              </div>
            </div>
          </div>
          <CatalogGrid items={PRODUCTS} activeTab={activeTab} addedIds={addedIds} onAddCart={onAddCart} gridId="productGrid" />
        </div>
      </section>

      <section className="indulge">
        <div className="container indulge-inner">
          <div className="indulge-image reveal-left">
            <img src={asset('feature2.webp')} alt="Bride wearing Risa Adorn bridal silk-thread bangles" />
          </div>
          <div className="indulge-text reveal-right">
            <span className="script">Bridal pre-booking</span>
            <h2>Reserve Your Stack for the <span className="accent">Big Day</span></h2>
            <p>Pre-book engagement and bridal silk-thread sets for your event date. Exclusive designs, comfort fit, and a free gift on early bookings — prices confirmed on WhatsApp.</p>
            <ul className="mini-benefits">
              <li><i className="fa-solid fa-gift"></i> Free gift for early bookings</li>
              <li><i className="fa-solid fa-star"></i> Special pre-booking discount</li>
              <li><i className="fa-solid fa-gem"></i> Priority delivery for the event date</li>
            </ul>
            <a href="https://wa.me/918778161826?text=Hi%20Risa%20Adorn%2C%20I%20want%20to%20pre-book%20bridal%20bangles." className="btn btn-primary">Pre-book on WhatsApp <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>
    </>
  )
}
