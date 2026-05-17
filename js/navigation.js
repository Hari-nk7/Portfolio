// Navigation — Smooth scroll, active tracking, mobile menu
(function() {
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav__link');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const sections = document.querySelectorAll('section[id]');

  // Scroll detection for nav background
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Active section tracking
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function(link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(function(section) {
    observer.observe(section);
  });

  // Mobile menu toggle
  let menuOpen = false;
  mobileBtn.addEventListener('click', function() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.add('nav__mobile-menu--open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('nav__mobile-menu--open');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.nav__link').forEach(function(link) {
    link.addEventListener('click', function() {
      menuOpen = false;
      mobileMenu.classList.remove('nav__mobile-menu--open');
      document.body.style.overflow = '';
    });
  });
})();
