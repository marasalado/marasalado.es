// Smooth scroll en navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Filtros del portfolio
const categoryButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    galleryItems.forEach(item => {
      item.style.display = (category === 'all' || item.dataset.category === category)
        ? 'block' : 'none';
    });
  });
});

// Modal
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

if (modal) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.querySelector('h3').textContent;
      modalDescription.innerHTML = `<p>${item.querySelector('p').textContent}</p>`;
      modal.classList.add('active');
    });
  });

  closeModal.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
}

// Contacto (demo)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensaje enviado correctamente ✅');
    form.reset();
  });
}
