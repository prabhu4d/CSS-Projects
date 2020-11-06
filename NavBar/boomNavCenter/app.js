const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    console.log("Clicked");
    if(menu.className == 'menu'){
        menu.className += ' cross';
        nav.className += ' nav-anime'
    }else{
        menu.className = 'menu';
        nav.className = 'nav'
    }

});
