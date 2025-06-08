// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading, .overview-content, .contact p', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-social-media-second, .education-list', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .overview-content h1, .about-img, .contact-social-media1, .qualification img, .ui-content h1, .ui-content p, .web-content h1, .web-content p, .video-content h1, .video-content p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact-img, .qualification-content h3, .qualification-content p, .frontend-content h1, .frontend-content p, .graphic-content h1, .graphic-content p, .ml-content h1, .ml-content p', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['App Developer','UI/UX Designer','Web Developer','Graphic Designer','Video Editor'],
    typeSpeed: 100,
    typeSpeed: 100,
    backDelay: 1000,
    loop: true

});