// Dropdown and sidebar logic for navigation

// Dropdown menus
function setupDropdowns(root) {
  const dropdowns = root.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    // Open on click/tap
    drop.querySelector('.dropdown-toggle')?.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      // Close others
      dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
      drop.classList.toggle('open');
    });
  });

  // Close dropdowns on clicking outside
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });
}

// Setup for both navbar and sidebar
setupDropdowns(document);

// Sidebar menu logic for small screens
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuBtn?.addEventListener('click', () => {
  sidebar.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeBtn?.addEventListener('click', () => {
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
