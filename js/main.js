// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('active'));
  });
}

// Scroll fade-in
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .product, .about__text, .about__image, .newsletter__inner, .booking__widget').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Newsletter form handler (placeholder — replace with Klaviyo/Mailchimp JS API)
const form = document.getElementById('signup-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    alert('Thanks for subscribing, ' + email + '! (Connect Klaviyo or Mailchimp to activate.)');
    form.reset();
  });
}
