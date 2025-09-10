// ===== Typing Effect =====
const typingText = document.querySelector(".typing-text");
const words = [
  "Computer Science Student 💻",
  "Web Enthusiast 🌐",
  "Tech Explorer 🚀",
  "Avid Reader 📚"
];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingText) typeEffect();
});

// ===== Scroll Animations =====
const faders = document.querySelectorAll(".fade-in, .zoom-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
