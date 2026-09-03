const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menu.textContent = open ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    if (menu) menu.textContent = '☰';
  });
});

const form = document.getElementById('projectForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'there';

  note.textContent = `Thanks, ${name}. Your enquiry is ready — connect this form to your email/backend to receive submissions.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
