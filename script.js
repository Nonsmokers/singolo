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

//scroll calculate + menu links active
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

