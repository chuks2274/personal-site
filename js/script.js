// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
document.getElementById('year').textContent = new Date().getFullYear();
  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Collapse navbar on mobile after clicking
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
});