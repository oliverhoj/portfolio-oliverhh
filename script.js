// =========================================================
// MOBIL MENU
// =========================================================

const burger =
  document.getElementById('burger');

const nav =
  document.getElementById('nav');


burger.addEventListener(
  'click',
  () => {

    const isOpen =
      nav.classList.toggle('open');

    burger.setAttribute(
      'aria-expanded',
      isOpen
    );

  }
);


nav.querySelectorAll('a').forEach(link => {

  link.addEventListener(
    'click',
    () => {

      nav.classList.remove('open');

      burger.setAttribute(
        'aria-expanded',
        'false'
      );

    }
  );

});


// =========================================================
// ÅRSTAL
// =========================================================

document.getElementById('year').textContent =
  new Date().getFullYear();


// =========================================================
// GALLERI CAROUSEL
// =========================================================

const galleryTrack =
  document.querySelector('.gallery-track');

const galleryItems =
  document.querySelectorAll('.gallery-item');

const galleryPrev =
  document.querySelector('.gallery-prev');

const galleryNext =
  document.querySelector('.gallery-next');

const galleryDots =
  document.querySelectorAll('.gallery-dot');


let galleryIndex = 0;


function getVisibleGalleryItems(){

  if(window.innerWidth <= 760){
    return 1;
  }

  return 3;

}


function updateGallery(){

  if(!galleryItems.length) return;


  const visibleItems =
    getVisibleGalleryItems();


  const maxIndex =
    Math.max(
      0,
      galleryItems.length - visibleItems
    );


  if(galleryIndex > maxIndex){
    galleryIndex = maxIndex;
  }


  const firstItem =
    galleryItems[0];


  const itemWidth =
    firstItem
      .getBoundingClientRect()
      .width;


  const styles =
    window.getComputedStyle(
      galleryTrack
    );


  const gap =
    parseFloat(styles.gap) || 0;


  const move =
    galleryIndex *
    (itemWidth + gap);


  galleryTrack.style.transform =
    `translateX(-${move}px)`;


  galleryDots.forEach(
    (dot,index) => {

      dot.classList.toggle(
        'active',
        index === galleryIndex
      );

    }
  );

}


// NÆSTE

galleryNext.addEventListener(
  'click',
  () => {

    const visibleItems =
      getVisibleGalleryItems();


    const maxIndex =
      Math.max(
        0,
        galleryItems.length - visibleItems
      );


    if(galleryIndex < maxIndex){

      galleryIndex++;

    }else{

      galleryIndex = 0;

    }


    updateGallery();

  }
);


// FORRIGE

galleryPrev.addEventListener(
  'click',
  () => {

    const visibleItems =
      getVisibleGalleryItems();


    const maxIndex =
      Math.max(
        0,
        galleryItems.length - visibleItems
      );


    if(galleryIndex > 0){

      galleryIndex--;

    }else{

      galleryIndex = maxIndex;

    }


    updateGallery();

  }
);


// DOTS

galleryDots.forEach(
  (dot,index) => {

    dot.addEventListener(
      'click',
      () => {

        galleryIndex = index;

        updateGallery();

      }
    );

  }
);


window.addEventListener(
  'resize',
  () => {

    galleryIndex = 0;

    updateGallery();

  }
);


updateGallery();


// =========================================================
// LIGHTBOX
// =========================================================

const lightbox =
  document.getElementById('lightbox');

const lightboxContent =
  document.getElementById('lightbox-content');


function openLightbox(item){

  lightboxContent.innerHTML = '';


  const img =
    item.querySelector('img');

  const video =
    item.querySelector('video');


  // BILLEDE

  if(img){

    const bigImg =
      document.createElement('img');


    bigImg.src =
      img.src;


    bigImg.alt =
      img.alt;


    lightboxContent.appendChild(
      bigImg
    );

  }


  // VIDEO

  if(video){

    const bigVideo =
      video.cloneNode(true);


    bigVideo.autoplay = true;

    bigVideo.muted = true;

    bigVideo.loop = true;

    bigVideo.controls = true;

    bigVideo.playsInline = true;


    lightboxContent.appendChild(
      bigVideo
    );


    bigVideo.play();

  }


  lightbox.classList.add('open');


  document.body.style.overflow =
    'hidden';

}


// =========================================================
// LUK LIGHTBOX
// =========================================================

function closeLightbox(event){

  if(
    event.target === lightbox ||
    event.target.classList.contains(
      'lightbox-close'
    )
  ){

    lightbox.classList.remove('open');


    lightboxContent.innerHTML = '';


    document.body.style.overflow = '';

  }

}


// ESC LUKKER OGSÅ

document.addEventListener(
  'keydown',
  event => {

    if(
      event.key === 'Escape' &&
      lightbox.classList.contains('open')
    ){

      lightbox.classList.remove('open');

      lightboxContent.innerHTML = '';

      document.body.style.overflow = '';

    }

  }
);

// =========================================================
// TYPEWRITER - KONTAKT
// =========================================================

const typewriterText = document.getElementById("typewriter-text");

const typewriterWords = [
  "Kaffe?",
  "En god idé?",
  "Et samarbejde?",
  "Et projekt?"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeWriter() {

  // Stop hvis elementet ikke findes
  if (!typewriterText) return;

  const currentWord = typewriterWords[wordIndex];

  if (!deleting) {

    // Skriver ordet
    typewriterText.textContent =
      currentWord.substring(0, letterIndex + 1);

    letterIndex++;

    // Hele ordet er skrevet
    if (letterIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeWriter, 1400);

      return;
    }

  } else {

    // Sletter ordet
    typewriterText.textContent =
      currentWord.substring(0, letterIndex - 1);

    letterIndex--;

    // Hele ordet er slettet
    if (letterIndex === 0) {

      deleting = false;

      wordIndex =
        (wordIndex + 1) % typewriterWords.length;
    }

  }

  const speed = deleting ? 55 : 90;

  setTimeout(typeWriter, speed);
}


// Start animationen
typeWriter();