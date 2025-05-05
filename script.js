// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form alert
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for reaching out! (Form submission is a placeholder.)');
//     contactForm.reset();
//   });
// } 
// Section highlighting for nav links
const sections = document.querySelectorAll('section');
const navLinksArr = Array.from(document.querySelectorAll('.nav-links a'));

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.scrollY + 120; // Offset for sticky header
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  navLinksArr.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}); 