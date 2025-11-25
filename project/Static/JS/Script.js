// ----------------------------
// 1. Smooth Scroll Navbar
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // ----------------------------
  // 2. Scroll Reveal Animation
  // ----------------------------
  const reveals = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // ----------------------------
  // 3. Comment Form Validation
  // ----------------------------
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');
      const message = form.querySelector('textarea');
      if(!name.value || !email.value || !message.value){
        e.preventDefault();
        alert("plase complate.!");
      }
    });
  }
  
  // ----------------------------
  // 4. Dark / Light Mode Toggle
  // ----------------------------
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "🌙/☀️";
  toggleBtn.classList.add("dark-mode-btn");
  document.body.appendChild(toggleBtn);
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  // Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});