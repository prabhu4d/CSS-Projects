const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideNav = document.querySelector('.slide-nav');
const main = document.querySelector('.main');
const close = document.querySelector('.close');


hamburgerMenu.addEventListener('click', ()=>{
    sideNav.style.marginLeft = '0px';
    main.style.marginLeft = '250px';
});

close.addEventListener('click', ()=>{
    sideNav.style.marginLeft = '-250px';
    main.style.marginLeft = '0px';
})