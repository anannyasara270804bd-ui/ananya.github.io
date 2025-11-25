// JS for CIS Club Website

// Mobile menu toggle
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Back to top button
const topBtn = document.getElementById('topBtn');

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Gallery modal popup
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');

const images = document.querySelectorAll('.gallery-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Contact form validation
const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const msgField = document.getElementById('message');
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (nameField.value.trim() === '' || emailField.value.trim() === '' || msgField.value.trim() === '') {
    alert('সব ঘর পূরণ করুন!');
    return;
  }

  success.style.display = 'block';
  form.reset();

  setTimeout(() => {
    success.style.display = 'none';
  }, 3000);
});