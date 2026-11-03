import './style.css'

document.getElementById('year').textContent = new Date().getFullYear()

const links = [...document.querySelectorAll('.nav-link')]
const sections = links.map((l) => document.querySelector(l.getAttribute('href')))

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.dataset.active = String(l.getAttribute('href') === '#' + e.target.id))
      }
    })
  },
  { rootMargin: '-20% 0px -70% 0px' }
)
sections.forEach((s) => s && observer.observe(s))
