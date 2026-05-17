// Main — Contact form handler and initialization
function handleContact(e) {
  e.preventDefault();
  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var message = document.getElementById('contact-message').value;
  var subject = encodeURIComponent('Portfolio Contact from ' + name);
  var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
  window.location.href = 'mailto:hharrii05@gmail.com?subject=' + subject + '&body=' + body;
}

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
