// DOM
const burgerBtn = document.getElementById('btn__burger');
const navMenu = document.getElementById('navigation__menu');
const navLinks = document.querySelectorAll('.nav--li');

// Toggle navigation function
const toggleNav = () => {
	navMenu.classList.toggle('nav--hidden');
}

// Event listeners
burgerBtn.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));
