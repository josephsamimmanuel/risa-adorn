/* ===== RISA ADORN — interaction & animation ===== */

function setTab(name) {
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('#flavorGrid .flavor-card');
  tabs.forEach(x => x.classList.toggle('active', x.dataset.tab === name));
  cards.forEach((c, i) => {
    const match = c.dataset.category === name;
    c.hidden = !match;
    if (match) {
      c.style.animation = 'none';
      c.offsetHeight;
      c.style.animation = `cardIn .6s cubic-bezier(.6,.05,.2,1) ${i % 4 * 0.1}s backwards`;
    }
  });
}

document.querySelectorAll('[data-delay]').forEach(el => {
  el.style.setProperty('--d', (el.dataset.delay || 0) + 'ms');
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1900);
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
  }, 2000);
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 400);
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
}));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(l => {
    const href = l.getAttribute('href');
    l.classList.toggle('active', href === '#' + current);
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right').forEach(el => io.observe(el));

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)));

const seeCourses = document.getElementById('seeCourses');
if (seeCourses) {
  seeCourses.addEventListener('click', () => setTab('courses'));
}

document.querySelectorAll('a[href="#shop"]').forEach(a => {
  if (a.textContent.toLowerCase().includes('course') || a.textContent.toLowerCase().includes('demo')) {
    a.addEventListener('click', () => setTab('courses'));
  }
  if (a.textContent.toLowerCase().includes('hair')) {
    a.addEventListener('click', () => setTab('accessories'));
  }
});

document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const overlay = document.createElement('div');
overlay.className = 'page-leave-overlay';
document.body.appendChild(overlay);

document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.addEventListener('click', (e) => {
    if (a.target === '_blank' || a.href.includes('wa.me')) return;
    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = a.href; }, 750);
  });
});

const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    heroImg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.style.background = '#2ecc71';
    const bagIcon = document.querySelector('.header-icons .fa-bag-shopping');
    const badge = bagIcon && bagIcon.parentElement.querySelector('span');
    if (badge) {
      badge.textContent = parseInt(badge.textContent || '0', 10) + 1;
      badge.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      );
    }
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i>';
      btn.style.background = '';
    }, 1400);
  });
});
