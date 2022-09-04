let btnNav = document.getElementsByClassName("btn-nav")[0];
let navLinks = document.getElementsByClassName("navbar-links")[0];

btnNav.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    btnNav.classList.toggle('active')
})