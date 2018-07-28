// Select Elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuItems = document.querySelectorAll('.nav-item');

// Set Intiail State Menu
let menuShow = true;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  e.preventDefault();
  
  if (!menuShow) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    menuItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    menuShow = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    menuShow = false;
  }
}
