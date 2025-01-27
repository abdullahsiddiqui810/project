const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("closeBtn");
const menuLinks = document.querySelectorAll(".menu-links li");
const menuImage = document.getElementById("menuImage");

// Open menu
menuToggle.addEventListener("click", () => {
    menuOverlay.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
});

// Change image on hover
menuLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        const imageSrc = link.getAttribute("data-image");
        menuImage.src = imageSrc;
        menuImage.classList.add("active");
    });

    link.addEventListener("mouseout", () => {
        menuImage.classList.remove("active");
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});

