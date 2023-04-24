const menuButton = document.querySelector('.menu-mobile')
const headerNav = document.querySelector('.header-nav')
const backShadow = document.querySelector('#backshadow')

function activateMenu(){
    menuButton.classList.toggle('active')
    headerNav.classList.toggle('active')
    backShadow.classList.toggle('active')
}

menuButton.addEventListener('click', activateMenu)