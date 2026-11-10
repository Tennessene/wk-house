const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  menu.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  document.querySelector('.site-header').classList.toggle('menu-open', !open);
});
document.querySelectorAll('.nav-left a').forEach((link) => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  document.querySelector('.site-header').classList.remove('menu-open');
}));

const productDialog = document.querySelector('.product-dialog');
document.querySelectorAll('.product').forEach((product) => product.querySelector('.product-image').addEventListener('click', () => {
  document.querySelector('.dialog-title').textContent = product.dataset.product;
  productDialog.showModal();
}));
document.querySelectorAll('.dialog-close').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
}));
document.querySelector('.notify-button:not(.bag-close)').addEventListener('click', () => {
  productDialog.close();
  document.querySelector('#email').focus();
  document.querySelector('.newsletter').scrollIntoView({ behavior: 'smooth' });
});
const bagDialog = document.querySelector('.bag-dialog');
document.querySelector('.bag-button').addEventListener('click', () => bagDialog.showModal());
document.querySelector('.bag-close').addEventListener('click', () => bagDialog.close());

document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-message').textContent = 'Thank you. You’re on the list.';
  event.currentTarget.reset();
});
