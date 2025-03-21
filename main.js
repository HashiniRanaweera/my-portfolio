/*~~~~~~~~~~~~~~~~~~~~ TOGGLE ICON NAVBAR ~~~~~~~~~~~~~~~~~~~~ */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*~~~~~~~~~~~~~~~~~~~~ SCROLL SECTION ACTIVE LINK~~~~~~~~~~~~~~~~~~~~ */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
            });
        };
    });

/*~~~~~~~~~~~~~~~~~~~~ STICKY NAVBAR ~~~~~~~~~~~~~~~~~~~~ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

/*~~~~~~~~~~~~~~~~~~~~ REMOVE TOGGLE ICON AND NAVBAR ~~~~~~~~~~~~~~~~~~~~ */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/*~~~~~~~~~~~~~~~~~~~~ SCROLL REVEAL ~~~~~~~~~~~~~~~~~~~~ */

ScrollReveal({ 
    distance:"80px",
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-content, heading ', { origin:'top'});
 ScrollReveal().reveal('.home-img,.volunteering-container, .portfolio-box, .contact form , .education-box', { origin:'bottom' });
 ScrollReveal().reveal('.home-contact h1, .about-img , .title', { origin:'left'});
 ScrollReveal().reveal('.home-contact p, .about-content , .skills-content', { origin:'right'});


/*~~~~~~~~~~~~~~~~~~~~ TYPED JS ~~~~~~~~~~~~~~~~~~~~ */
const typed = new Typed('.multiple-text',{
    strings:['Engineering Undergraduate','Machine Learning Enthusiast','AI Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});
