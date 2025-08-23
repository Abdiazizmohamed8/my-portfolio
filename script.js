// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Close mobile menu on link click (instant scroll)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('show')) {
      navList.classList.remove('show');
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Animate skill bars when skills section is visible
  const skillsSection = document.getElementById('skills');
  const skillsTop = skillsSection.offsetTop - window.innerHeight + 100;
  if (scrollY >= skillsTop) {
    const skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }
});
