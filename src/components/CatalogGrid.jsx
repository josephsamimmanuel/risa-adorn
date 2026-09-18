import { useEffect, useRef } from 'react'
import { productEnquiryText, waLink } from '../data/catalog'

export default function CatalogGrid({ items, activeTab, addedIds, onAddCart, gridId = 'flavorGrid' }) {
  const tabReady = useRef(false)

  useEffect(() => {
    if (!tabReady.current) {
      tabReady.current = true
      return
    }
    const cards = document.querySelectorAll(`#${gridId} .flavor-card`)
    cards.forEach((c, i) => {
      const match = activeTab === 'all' || c.dataset.category === activeTab
      if (match) {
        c.style.animation = 'none'
        void c.offsetHeight
        c.style.animation = `cardIn .6s cubic-bezier(.6,.05,.2,1) ${(i % 4) * 0.1}s backwards`
      }
    })
  }, [activeTab, gridId])

  return (
    <div className="flavor-grid" id={gridId}>
      {items.map((item) => {
        const key = `${item.category}-${item.title}`
        return (
          <article
            key={key}
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
              style={addedIds[key] ? { background: '#2ecc71' } : undefined}
            >
              <i className={`fa-solid ${addedIds[key] ? 'fa-check' : 'fa-bag-shopping'}`}></i>
            </a>
          </article>
        )
      })}
    </div>
  )
}
