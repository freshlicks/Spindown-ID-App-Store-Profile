// Enhanced animations and scroll effects for Spindown ID
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll(".scroll-animate").forEach((el) => {
    observer.observe(el);
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = "rgba(18, 24, 41, 0.98)";
        header.style.backdropFilter = "blur(20px)";
      } else {
        header.style.background = "rgba(31, 41, 64, 0.8)";
        header.style.backdropFilter = "blur(10px)";
      }
    }
  });

  // Download app functionality
  document.querySelectorAll('a[href="#download"]').forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Add your download logic here
      console.log("Download button clicked");
    });
  });

  // Mobile menu toggle (if needed)
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
    });
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    if (navLinks && window.innerWidth > 768) {
      navLinks.style.display = "flex";
    } else if (navLinks) {
      navLinks.style.display = "none";
    }
  });

  // Add loading animation to buttons
  document.querySelectorAll(".btn, .cta-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.href === "#" || this.getAttribute("href") === "#") {
        e.preventDefault();
        // Add loading state
        const originalText = this.textContent;
        this.innerHTML = '<span class="loading-spinner"></span> Loading...';

        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      }
    });
  });

  // Parallax effect for background elements
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add stagger animation to feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 100}ms`;
  });
});
