let menu = document.getElementById("menu-bar");

function drop(){
  var nav = document.querySelector('.navLinks');
  nav.classList.toggle('active');
  console.log("work")
}

var acc = document.getElementsByClassName("accordion");
var i;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function renderForm() {
  const reg = document.querySelector(".reg");
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  const form = document.querySelector('.form-container');

  reg.style.display = "block";
  form.style.overflow = "auto";

  overlay.classList.add('inactive');
  body.style.overflow = "hidden";
}

function closeForm() {
  const reg = document.querySelector(".reg");
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  reg.style.display = 'none';
  overlay.classList.remove('inactive');
  body.style.overflow = "auto";
}

document.addEventListener('DOMContentLoaded', function() {
  const showInterestBtn = document.querySelector('.r-btn');
  showInterestBtn.addEventListener('click', function(event) {
    event.preventDefault();
    renderForm();
  });

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    closeForm();
  });
});


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
 loop:true,
});


var swiper = new Swiper(".the-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
 loop:true,
 breakpoints: {
  0: {
      slidesPerView: 1,
  },
  60: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
},
});


var swiper = new Swiper(".conti", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});


ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
 });
 ScrollReveal().reveal('.service-head, .line',{ delay: 300, origin:'left' });
 ScrollReveal().reveal('.head',{ delay: 400, origin:'left' });
 ScrollReveal().reveal('.cards',{ delay: 500, origin:'bottom' });
 ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin:'left' });
 ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin:'bottom' });
 ScrollReveal().reveal('.text-box', { delay: 700, origin:'right' });
 ScrollReveal().reveal('.sec-02 .image .sec-03 .image', { delay: 500, origin:'top' });
 ScrollReveal().reveal('.media-icons i', { delay: 500, origin:'left', interval: 200 });
 ScrollReveal().reveal('.text-overlay', { delay: 700, origin:'bottom' });
 ScrollReveal().reveal('.m-box', { delay: 700, origin:'bottom' });
 ScrollReveal().reveal('.fa-cont', { delay: 700, origin:'left' });
 ScrollReveal().reveal('.faq', { delay: 700, origin:'top' });
 ScrollReveal().reveal('.box', { delay: 700, origin:'top' });
 ScrollReveal().reveal('.properties .slider .slide .image', { delay: 700, origin:'top' });
 ScrollReveal().reveal('.properties .slider .slide .content', { delay: 700, origin:'right' });