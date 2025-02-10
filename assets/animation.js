  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-element");

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("fade-up");
          }
          if (entry.target.classList.contains("fade-in")) {
            entry.target.classList.add("fade-in");
          }
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
  });
