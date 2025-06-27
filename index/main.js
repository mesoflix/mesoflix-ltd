// Sidebar menu logic for small screens
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  document.body.style.overflow = '';
});

// Animate features and images on scroll
const animatedEls = document.querySelectorAll('.animated');
function animateOnScroll() {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight-80) el.style.opacity = 1;
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);
