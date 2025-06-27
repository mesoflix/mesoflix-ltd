// Dropdown and sidebar logic for navigation

// Helper to set up dropdowns for both nav and sidebar
function setupDropdowns(root) {
  const dropdowns = root.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    if (!toggle) return;

    // Open/close on click
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent document click from firing
      // Close all other dropdowns
      dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
      drop.classList.toggle('open');
    });

    // For desktop: open on hover
    drop.addEventListener("mouseenter", function() {
      if (window.innerWidth > 700) {
        dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
        drop.classList.add('open');
      }
    });
    drop.addEventListener("mouseleave", function() {
      if (window.innerWidth > 700) {
        drop.classList.remove('open');
      }
    });
  });

  // Close on outside click
  document.addEventListener("click", function(e) {
    if (!root.contains(e.target)) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });
}

// Setup for both navbar and sidebar
function setupAllDropdowns() {
  const nav = document.querySelector('.navbar');
  const sidebar = document.getElementById('sidebar');
  if (nav) setupDropdowns(nav);
  if (sidebar) setupDropdowns(sidebar);
}
setupAllDropdowns();

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

// Animate features and images on scroll (if present)
const animatedEls = document.querySelectorAll('.animated');
function animateOnScroll() {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight-80) el.style.opacity = 1;
  });
}
if (animatedEls.length) {
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('DOMContentLoaded', animateOnScroll);
}
