import { useState } from 'react'

export default function CtaSection({ headingId = 'cta' }) {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section className="cta" id={headingId}>
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
  )
}
