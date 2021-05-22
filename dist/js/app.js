const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const sidenav = document.getElementById('mySidenav');
const mainTopic = document.querySelector('.main-topic');
const mainContent = document.querySelector('.main-content');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

/*
  Function for toggling navigation menu
*/

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    sidenav.classList.add('open');
    mainTopic.classList.add('open');
    mainContent.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    sidenav.classList.remove('open');
    mainTopic.classList.remove('open');
    mainContent.classList.remove('open');
    showMenu = false;
  }
}
