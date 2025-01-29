const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeBtn');
// const menuLinks = document.querySelectorAll(".menu-links li");
// const menuImage = document.getElementById("menuImage");

// // Open menu
menuToggle.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

// // Close menu
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});

// // Change image on hover
// menuLinks.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//         const imageSrc = link.getAttribute("data-image");
//         menuImage.src = imageSrc;
//         menuImage.classList.add("active");
//     });

//     link.addEventListener("mouseout", () => {
//         menuImage.classList.remove("active");
//     });
// });

// *******************

// Animation JS

const menuLinks = document.querySelectorAll('.menu-links li a');
const imageContainer = document.querySelector('.image-container');

let lastHoveredIndex = -1;

menuLinks.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    const imageUrl = link.getAttribute('data-image');
    const position = link.getAttribute('data-position');
    console.log(position);

    // Convert the background position into negative values
    let negativePosition = position
      .split(' ') // Split the position into an array (e.g., ["50%", "20%"])
      .map((value) => `-${value}`) // Add a minus sign to each value (e.g., ["-50%", "-20%"])
      .join(' '); // Join the array back into a string (e.g., "-50% -20%")

    console.log(negativePosition);
    if (lastHoveredIndex !== -1) {
      if (index > lastHoveredIndex) {
        negativePosition;
      } else if (index < lastHoveredIndex) {
        negativePosition;
      }
    }

    imageContainer.style.backgroundImage = `url(${imageUrl})`;
    imageContainer.style.backgroundPosition = negativePosition;

    lastHoveredIndex = index;
  });

  link.addEventListener('mouseout', () => {
    imageContainer.style.backgroundImage = `url(${imageUrl})`;
    imageContainer.style.backgroundPosition = negativePosition;
  });
});

// const menuLinksRight = document.querySelectorAll('.menu-links li a');
const imageContainerRight = document.querySelector('.image-container-right');

let lastHoveredIndexRight = -1;

menuLinks.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    const imageUrl = link.getAttribute('data-image');
    const position = link.getAttribute('data-position');

    let backgroundPosition = position;
    if (lastHoveredIndexRight !== -1) {
      if (index > lastHoveredIndexRight) {
        backgroundPosition = position;
      } else if (index < lastHoveredIndexRight) {
        backgroundPosition = position;
      }
    }

    imageContainerRight.style.backgroundImage = `url(${imageUrl})`;
    imageContainerRight.style.backgroundPosition = backgroundPosition;

    lastHoveredIndexRight = index;
  });

  link.addEventListener('mouseout', () => {
    imageContainerRight.style.backgroundImage = `url(${imageUrl})`;
    imageContainerRight.style.backgroundPosition = backgroundPosition;
  });
});

// *******************

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
    behavior: 'smooth', // Smooth scrolling effect
  });
});

// *******************

// Gsap Animation
gsap.registerPlugin(ScrollTrigger);

let headingAnimation = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: 'power4.out',
    opacity: 0,
  },
  scrollTrigger: {
    trigger: '.club-sec',
    start: 'top 80%',
    markers: true,
    toggleActions: 'restart none none none',
  },
});
headingAnimation.from('.anm-icon', { y: 30 });
headingAnimation.from('.anm-sub-heading', { y: 30 }, '-=1.2');
headingAnimation.from('.anm-main-heading', { y: 40 }, '-=1.3');
headingAnimation.from('.anm-para', { y: 50 }, '-=1.4');
headingAnimation.from('.anm-sub-heading-2', { y: 50 }, '-=1.3');
headingAnimation.from('.anm-para-2', { y: 50 }, '-=1.3');
headingAnimation.from('.anm-btn', { y: 50 }, '-=1.3');
