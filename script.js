function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Modal functionality
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

// Open the modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById(button.getAttribute('data-modal'));
        modal.style.display = 'block';
    });
});

// Close the modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById(button.getAttribute('data-modal'));
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
