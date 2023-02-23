(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const closedMenu = document.getElementById('b');
    const closeeMenu = document.getElementById('a');
    const closMenu = document.getElementById('p');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    closedMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    closeeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });


    closMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();