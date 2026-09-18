import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useReveal(ready = true) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!ready) return undefined

    document.querySelectorAll('[data-delay]').forEach((el) => {
      el.style.setProperty('--d', (el.dataset.delay || 0) + 'ms')
    })

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
    return () => io.disconnect()
  }, [pathname, ready])
}
