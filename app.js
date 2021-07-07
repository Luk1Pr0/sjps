// DOM
const burgerBtn = document.getElementById('btn__burger');
const navMenu = document.getElementById('navigation__menu');
const navLinks = document.querySelectorAll('.nav--li');

const modalContainer = document.getElementById('modal__container');
const modal = document.getElementById('modal');
const modalFiles = document.querySelectorAll('.in-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

// Show modal on a file click
const showModal = (e) => {
	const targetLink = e.target.src;
	const targetAlt = e.target.alt;
	modalContainer.classList.remove('hidden');
	console.log(modal);
	modal.src = targetLink;
	modal.alt = targetAlt;

}

const closeModal = () => {
	modalContainer.classList.add('hidden');
}

// Toggle navigation function
const toggleNav = () => {
	navMenu.classList.toggle('nav--hidden');
}

// Event listeners
burgerBtn.addEventListener('click', toggleNav);
btnCloseModal.addEventListener('click', closeModal);
navLinks.forEach(link => link.addEventListener('click', toggleNav));
modalFiles.forEach(file => file.addEventListener('click', showModal));


