// script.js - Main JavaScript file for navigation and basic functionality

// DOM Elements
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
const terminalCursors = document.querySelectorAll(".terminal-cursor");
const backToTop = document.querySelector(".back-to-top");
const socialLinks = document.querySelectorAll(".social-link");
const viewMoreProjectsBtn = document.querySelector(".view-more-projects");

// Mobile Menu Toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    const isExpanded =
      mobileMenuToggle.getAttribute("aria-expanded") === "true";
    mobileMenuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");

    // Toggle hamburger to X animation
    const svg = mobileMenuToggle.querySelector("svg");
    if (!isExpanded) {
      svg.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          `;
    } else {
      svg.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          `;
    }
  });
}

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 640) {
      // sm breakpoint
      mobileMenu.classList.add("hidden");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      const svg = mobileMenuToggle.querySelector("svg");
      svg.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
    }
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");

    // Handle home link (target is '#')
    if (targetId === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      updateActiveNavLink("home");
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active state
      const section =
        link.getAttribute("data-section") || targetId.substring(1); // Remove # from id
      updateActiveNavLink(section);
    }
  });
});

// Active navigation link based on scroll position
function updateActiveNavLink(section) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkSection = link.getAttribute("data-section");

    if (linkSection === section) {
      link.classList.add("active");
    }
  });
}

// Scroll spy to update active nav link
window.addEventListener("scroll", () => {
  const sections = [
    { id: "home", element: document.getElementById("hero") },
    { id: "projects", element: document.getElementById("projects") },
    { id: "about", element: document.getElementById("about") },
    { id: "socials", element: document.getElementById("socials") },
  ];

  let currentSection = "home";
  const scrollPosition = window.scrollY + 100; // Add offset for better detection

  sections.forEach((section) => {
    if (section.element) {
      const sectionTop = section.element.offsetTop;
      const sectionHeight = section.element.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    }
  });

  updateActiveNavLink(currentSection);
});

// Terminal Cursor Blinking
function blinkCursors() {
  terminalCursors.forEach((cursor) => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  });
}

// Start cursor blinking
if (terminalCursors.length > 0) {
  setInterval(blinkCursors, 500);
}

// Back to Top functionality
if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    updateActiveNavLink("home");
  });

  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.style.opacity = "1";
      backToTop.style.pointerEvents = "auto";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.pointerEvents = "none";
    }
  });

  // Initialize back to top button visibility
  backToTop.style.opacity = "0";
  backToTop.style.pointerEvents = "none";
  backToTop.style.transition = "opacity 0.3s ease";
}

// Social Links - Add analytics or tracking
socialLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const platform = link.getAttribute("data-platform");
    console.log(`Clicked on ${platform} link`);
    // You can add analytics tracking here
  });
});

// View More Projects button - prevent default and show message
if (viewMoreProjectsBtn) {
  viewMoreProjectsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "More projects coming soon! This would navigate to a projects page in a real implementation."
    );
  });
}

// Add active state styles to CSS via JavaScript
const style = document.createElement("style");
style.textContent = `
    .nav-link.active,
    .mobile-nav-link.active {
        color: #545643;
        font-weight: 600;
    }
    
    .mobile-nav-link.active {
        background-color: #BBACC1;
        border-left-color: #545643;
    }
    
    .terminal-cursor {
        transition: opacity 0.1s;
    }
`;
document.head.appendChild(style);

// Initialize active nav link on page load
document.addEventListener("DOMContentLoaded", () => {
  updateActiveNavLink("home");

  // Close mobile menu on window resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
      if (mobileMenu) mobileMenu.classList.add("hidden");
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute("aria-expanded", "false");
        const svg = mobileMenuToggle.querySelector("svg");
        if (svg) {
          svg.innerHTML = `
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    `;
        }
      }
    }
  });
});
