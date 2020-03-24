const MENU = document.querySelectorAll('.menu-link');
const anchors = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector('.header');
const portfolio = document.querySelector('.portfolio');
const services = document.getElementById('services');
const about = document.getElementById('about');
const contact = document.getElementById('contact');


//ACTIVATE MENU TAGS
MENU.forEach(el => {  
  el.addEventListener('click', () => {
    MENU.forEach(element => {
        element.classList.remove('menu-link-active');
    });
    el.classList.add('menu-link-active');
  });
});


//SCROLLS TO ANCHORS
for (let anchor of anchors) {
  anchor.addEventListener('click', el=>{
    el.preventDefault()      
    let block = anchor.getAttribute('href').substr(1)      
    document.getElementById(block).scrollIntoView({block:'start', behavior:'smooth'})
  })
}


//SCROLL CALCULATE + MENU LIST ACTIVE
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


//SLIDER
let slideIndex = 1;                                                           //functions changes slideindex
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

function showSlides(n) {                                                       //carousel
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

function openbox(n){                                                          //screen iphone
  display = document.getElementById(n).style.display;
  display == 'none' ? document.getElementById(n).style.display ='block' :
    document.getElementById(n).style.display='none';
};



//PORTFOLIO
const portfolioList = document.querySelectorAll('.portfolio-button');
const portfolioItems = document.querySelectorAll('.portfolio-image');
const portfolioAllImages = document.querySelector('.portfolio-image-block');


portfolioList.forEach(el => {                                                 //menu active tags+changes images
  el.addEventListener('click', () => {
    portfolioList.forEach(element => {
      element.classList.remove('portfolio-button-active'); 
    });
    el.classList.add('portfolio-button-active');
    for(let i = portfolioAllImages.children.length; i >= 0; i--){
      portfolioAllImages.appendChild(portfolioAllImages.children[Math.random() * i | 0]);
    }
  });
});


portfolioItems.forEach(el => {                                                //add bordering images
  el.addEventListener('click', () => {
    portfolioItems.forEach(element => {
      element.classList.remove('portfolio-image-active'); 
    });
    el.classList.add('portfolio-image-active');
  });
});


//MODAL
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