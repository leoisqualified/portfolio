const typingText = document.querySelector(".typing-effect");
const professions = [
  "Software Developer.",
  "Backend Developer.",
  "Data Analyst.",
  "Data Scientist.",
];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const currentProfession = professions[index];
  if (!isDeleting) {
    typingText.textContent = currentProfession.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentProfession.length) {
      isDeleting = true;
      setTimeout(type, 2000); // Pause at the end of the word
    } else {
      setTimeout(type, 100); // Typing speed
    }
  } else {
    typingText.textContent = currentProfession.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % professions.length; // Move to the next profession
    }
    setTimeout(type, 50); // Deleting speed
  }
};

type(); // Start the typing effect

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close Navbar on Scroll
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Close Navbar when a link is clicked (optional)
navLinks.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
