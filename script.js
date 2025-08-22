// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => navMenu.classList.toggle("show"));

// Smooth Scroll
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.remove("show");
  document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

// Skill Bars Animation
const skillBars = document.querySelectorAll(".skill-bar div");
function animateSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// Navbar Active Link
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    const sectionHeight = section.offsetHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) link.classList.add("active");
  });
});
