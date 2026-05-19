// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("message").textContent =
      "Thank you, " + name + "! An email has been sent to " + email + ".";
  });
}

// Image filter
function filter(category) {
  let images = document.querySelectorAll('.masonry img');
  images.forEach(img => {
    if (category === 'all') {
      img.classList.remove('hidden');
    } else if (img.classList.contains(category)) {
      img.classList.remove('hidden');
    } else {
      img.classList.add('hidden');
    }
  });
}

// Timeline items slide in on scroll
const tlObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      tlObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.timeline-item').forEach(el => tlObs.observe(el));

// Centre line fills downward
const fillEl = document.getElementById('timelineFill');
if (fillEl) {
  const lineObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        fillEl.style.height = '100%';
        lineObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  lineObs.observe(fillEl.parentElement);
}

// Typewriter effect
const words = ['Photographer', 'Designer', 'Creator', 'Storyteller'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeWriter() {
  const current = words[wordIndex];

  if (isDeleting) {
    document.getElementById('typewriter').textContent = current.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    document.getElementById('typewriter').textContent = current.substring(0, letterIndex + 1);
    letterIndex++;
  }

  // Finished typing the word
  if (!isDeleting && letterIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1500);
  }

  // Finished deleting the word
  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeWriter, isDeleting ? 80 : 120);
}

// Only run if the typewriter element exists on the page
const typeEl = document.getElementById('typewriter');
if (typeEl) { typeWriter(); }