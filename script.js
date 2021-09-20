const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

const aboutMeNav = document.querySelector('.nav-about-me')
const skillsNav = document.querySelector('.nav-skills');
const projectsNav = document.querySelector('.nav-projects');
const contactNav = document.querySelector('.nav-contact');

const aboutMeDiv = document.querySelector('.about-me');
const skillsDiv = document.querySelector('.skills');
const projectsDiv = document.querySelector('.projects');
const contactDiv = document.querySelector('.contact');

navButton.addEventListener('click', () => {
    navButton.classList.toggle("open");
    navMenu.classList.toggle("open");
});

aboutMeNav.addEventListener('click', () => {
   aboutMeDiv.scrollIntoView({behavior: "smooth", block: "center"});
});

skillsNav.addEventListener('click', () => {
    skillsDiv.scrollIntoView({behavior: "smooth", block: "center"});
});

projectsNav.addEventListener('click', () => {
    projectsDiv.scrollIntoView({behavior: "smooth", block: "center"});
});

contactNav.addEventListener('click', () => {
    contactDiv.scrollIntoView({behavior: "smooth", block: "center"});
});

