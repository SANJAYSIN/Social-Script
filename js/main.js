  // hamburgermenu

const hamburger = document.querySelector('.hamburger-trigger');
const nav = document.querySelector('.menu_section nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
}

const links = document.querySelectorAll('.menu_section > nav > ul > li.has-children .fa-caret-down');

links.forEach(elm => {
  elm.addEventListener('click', function (e) {
    e.preventDefault();
let elmparent = elm.closest('.has-children');
elmparent.classList.toggle('sub-show')
  }); 
});


AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
});
window.addEventListener("load", AOS.refresh);



$(document).ready(function () {
  new Swiper(".core_service__section .swiper-container", {
    loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 4,
    paginationClickable: true,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});

let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    const target = document.querySelector('.approach-section');

    entries.forEach(entry => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;

      if (entry.isIntersecting && scrollingDown) {
        target.classList.add('animate-active');
      }

      if (!entry.isIntersecting && scrollingUp) {
        target.classList.remove('animate-active');
      }
    });
  }, {
    threshold: 0.5
  });

  const triggerElement = document.querySelector('.robot-section-offset');
  observer.observe(triggerElement);

