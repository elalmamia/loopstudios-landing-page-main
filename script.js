const nav = document.querySelector('ul');
const burgerClose = document.querySelector('.burger-icon-close');
const burgerOpen = document.querySelector('.burger-icon');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('li');

burger.addEventListener('click',toggleMenu);
links.forEach(link=>link.addEventListener('click', toggleMenu))
function toggleMenu(){
    nav.classList.toggle('show');
    burgerClose.classList.toggle('show');
    burgerOpen.classList.toggle('show');
}