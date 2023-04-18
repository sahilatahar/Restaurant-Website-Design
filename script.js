const hamburgIcon = document.getElementById('hamburgIcon');
const themeIcon = document.getElementById('themeIcon');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('.navbar');
const scrollButton = document.querySelector('.scroll-button');

// ========== Navbar Box Shadow && Scroll Button ==========

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    if (window.pageYOffset > 500) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }

});

// ========== Navbar Hamburg Icon ==========
let isNavOpen = false;
hamburgIcon.addEventListener('click', () => {
    if (!isNavOpen) {
        navList.style.height = 'max-content';
        hamburgIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        navList.style.height = '0px';
        hamburgIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
    isNavOpen = !isNavOpen;
});
const navOptions = document.querySelectorAll('.nav-list a');
navOptions.forEach((navOption) => {
    navOption.addEventListener('click', () => {
        isNavOpen = !isNavOpen;
        navList.style.height = '0px';
        hamburgIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
})

// ========== Theme Change ==========
let isDarkTheme = localStorage.getItem('theme') !== 'dark' || localStorage.getItem('theme') == null ? false : true;

if (isDarkTheme) {
    document.body.classList.toggle('dark-theme');
}

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (isDarkTheme) {
        themeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        themeIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
    isDarkTheme = !isDarkTheme
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// ========== Fade Animation ==========
const classes = ['.home-container', '.about-container', '.services-container', '.menu', '.contact', '.footer-container'];
scrollObserver(classes)