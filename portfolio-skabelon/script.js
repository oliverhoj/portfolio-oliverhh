// Mobil-menu: åbn/luk
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Luk menuen når man klikker et link (rart på mobil)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Årstal i bunden opdateres automatisk
document.getElementById('year').textContent = new Date().getFullYear();
