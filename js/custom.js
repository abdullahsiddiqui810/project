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

// Club Section Animation

let revealContainers = document.querySelectorAll('.club-sec');
revealContainers.forEach((container) => {
  let boxAnim = container.querySelectorAll('.club-anim-elm');
  imageanm = container.querySelector('.imgs-wrapper img');
  let clubSecAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 60%',
      toggleActions: 'restart none none reset',
      markers: false,
    },
  });

  clubSecAnimation
    // .set(boxAnim, { y: 20, opacity: 0 })
    .from(boxAnim, { y: 40, opacity: 0, stagger: 0.3 })
    .from(imageanm, { y: '100%', duration: 2, ease: 'power4.out' }, '=-2');
  // .set(vidSet, { scale: 1.3, transformOrigin: 'top right' })
  // .set(boxAnim, { y: -20, opacity: 0 })
  // .to(reveal, { x: 0, duration: 2, ease: Power4.easeInOut })
  // .to(overlay, { x: '100%' }, '=-0.5')
  // .to(vidSet, { scale: 1, duration: 1 }, '=-0.4')
  // .to(serInfo2, { y: 0, duration: 1 }, '=-0.95')
  // .to(animBd, { x: 0, duration: 1, ease: Power4.easeInOut }, '=-0.5');
});

// *****************

// Golf Section Animation

let revealGolfContainers = document.querySelectorAll('.golf-sec');
revealGolfContainers.forEach((container) => {
  let boxAnim = container.querySelectorAll('.golf-anim-elm');
  imageanm = container.querySelectorAll('.golf-img-anm');
  contentBox = container.querySelectorAll('.content-box');
  let golfSecAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 60%',
      toggleActions: 'restart none none reset',
      markers: false,
    },
  });

  golfSecAnimation
    .from(imageanm, {
      x: '-50%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.5,
      opacity: 0,
    })
    .from(contentBox, { y: 100, opacity: 0 }, '=-.7')
    .from(boxAnim, { y: 40, opacity: 0, stagger: 0.3 }, '=-0.8');
});

// *****************

// lifeStyle Section Animation

let revealLifeContainers = document.querySelectorAll('.lifestyle-sec');
revealLifeContainers.forEach((container) => {
  let boxAnim = container.querySelectorAll('.lifestyle-anim-elm');
  let lifeStyleSecAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 60%',
      toggleActions: 'restart none none reset',
      markers: false,
    },
  });

  lifeStyleSecAnimation.from(boxAnim, { y: 40, opacity: 0, stagger: 0.3 });

  let lifeStyleCardAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.lifestyle-cards',
      start: 'top 50%',
      toggleActions: 'restart none none reset',
      markers: false,
    },
  });
  lifeStyleCardAnimation.from('.box-odd .life-anm-elm', {
    y: '100%',
    opacity: 0,
  });
  lifeStyleCardAnimation.from(
    '.box-even .life-anm-elm',
    {
      y: '-100%',
      opacity: 0,
    },
    '=-0.5'
  );
});
