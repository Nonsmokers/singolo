const MENU = document.querySelectorAll('.menu-link');
const anchors = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector('.header');
const portfolio = document.querySelector('.portfolio');
const services = document.getElementById('services');
const about = document.getElementById('about');
const contact = document.getElementById('contact');


//activate menu links
MENU.forEach(el => {  
  el.addEventListener('click', () => {
    MENU.forEach(element => {
        element.classList.remove('menu-link-active');
    });
    el.classList.add('menu-link-active');
  });
});


//scroll to anchors
for (let anchor of anchors) {
  anchor.addEventListener('click', el=>{
    el.preventDefault()      
    let block = anchor.getAttribute('href').substr(1)      
    document.getElementById(block).scrollIntoView({block:'start', behavior:'smooth'})
  })
}

//scroll calculate + menu list active
window.onscroll = function showHeader() {
  
  let servicesH = services.offsetTop;
  let portfolioH = portfolio.offsetTop;
  
    if(window.pageYOffset > 60) {
      header.classList.add('header-short');
    }else{
      header.classList.remove('header-short');
    } 
      if (window.pageYOffset > portfolioH + servicesH + 850 - 95) {
        MENU.forEach(element => {
            element.classList.remove('menu-link-active');
        });
        MENU[4].classList.add('menu-link-active');
      }else if(window.pageYOffset > portfolioH + servicesH) {
        MENU.forEach(element => {
            element.classList.remove('menu-link-active');
        });
        MENU[3].classList.add('menu-link-active');
      }else if(window.pageYOffset > portfolioH - 150) {
        MENU.forEach(element => {
            element.classList.remove('menu-link-active');
        });
        MENU[2].classList.add('menu-link-active');
      }else if(window.pageYOffset > servicesH - 150) {
        MENU.forEach(element => {
            element.classList.remove('menu-link-active');
        });
        MENU[1].classList.add('menu-link-active');
      }else {
        MENU.forEach(element => {
            element.classList.remove('menu-link-active');
        });
        MENU[0].classList.add('menu-link-active');
      }
}

/////////////////////*SLIDER*//////////////////
let slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;    
    let slides = document.getElementsByClassName("slider-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
};


//Screen phone off
function openbox(n){
  display = document.getElementById(n).style.display;
  display=='none' ? document.getElementById(n).style.display='block' :
    document.getElementById(n).style.display='none';
};


/////////////////////*PORTFOLIO*//////////////////
const portfolioList = document.querySelectorAll('.portfolio-button');
const portfolioItems = document.querySelectorAll('.portfolio-image');

//portfolio menu list activate
portfolioList.forEach(el => {
  el.addEventListener('click', () => {
    portfolioList.forEach(element => {
      element.classList.remove('portfolio-button-active');

    });
    el.classList.add('portfolio-button-active');   
  });
});

//portfolio active image
portfolioItems.forEach(el => {
  el.addEventListener('click', () => {
    portfolioItems.forEach(element => {
      element.classList.remove('portfolio-image-active'); 
    });
    el.classList.add('portfolio-image-active');
    portfolioItems.forEach(element => {
            element.classList.remove('portfolio__item-active');
        });
  });
});

//modal
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const blog = document.getElementById('blog');
const theme = document.getElementById('theme');
const descr = document.getElementById('descr');


const submitBtn = document.getElementById('submit');      
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (name.value !== '' && email.value !== ''){
        if (subject.value !== '') {
            theme.textContent = 'Тема: ' + subject.value;
        }
        if (blog.value !== '') {
            descr.textContent = 'Описание: ' + blog.value;
        }
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});


const okBtn = document.getElementById('ok');
okBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    subject.value = '';
    blog.value = '';
    name.value = '';
    email.value = '';
    theme.textContent = 'Без темы';
    descr.textContent = 'Без описания';
});


const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', e =>{
    let target = e.target;
    if (target.classList.contains('overlay')) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        subject.value = '';
        blog.value = '';
        name.value = '';
        email.value = '';
        theme.textContent = 'Без темы';
        descr.textContent = 'Без описания';
    }
});

