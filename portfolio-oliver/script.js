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



// Skrivemaskine-effekt i kontaktsektionen
const words = ['Spørgsmål?', 'Samarbejde?', 'Kaffe?']; // ← ret/tilføj selv ord her
const typewriterEl = document.getElementById('typewriter-text');

if (typewriterEl) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 90;
  const DELETE_SPEED = 50;
  const PAUSE_AFTER_WORD = 1200;
  const PAUSE_BEFORE_NEXT = 300;

  function tick() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      typewriterEl.textContent = currentWord.slice(0, charIndex);
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_WORD);
        return;
      }
    } else {
      charIndex--;
      typewriterEl.textContent = currentWord.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, PAUSE_BEFORE_NEXT);
        return;
      }
    }

    setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
}