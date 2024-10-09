// Toogle Navbar 
let menuIcon = document.querySelector('#menu-icon') /*kata kunci buat bikin variabel*/
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove toogle icon
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Student at IDN Boarding School', 'Software Engineer', 'Product Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.heading, .about-content h3, .services h2, .portofolio h2, .contact h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form, .about-content p, .about-content, .tittle, .timeline', { origin: 'buttom' });
ScrollReveal().reveal('.home-content, .home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-contact, .swiper-pagination-bullet', { origin: 'right' });


