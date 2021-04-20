const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


//Opens the Nav Menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


//When an option on the nav menu is selected the nav menu will be closed
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})