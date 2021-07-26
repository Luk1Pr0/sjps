// DOM
const burgerBtn = document.getElementById('btn__burger');
const navMenu = document.getElementById('navigation__menu');
const navLinks = document.querySelectorAll('.nav--li');
const navigation = document.querySelector('.navigation');

const modalContainer = document.getElementById('modal__container');
const modal = document.getElementById('modal');
const modalFiles = document.querySelectorAll('.in-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

const subForm = document.getElementById("sub__form");

const menuBtns = document.querySelectorAll('.menu');
const documents = document.querySelectorAll('.pdf__container');

let lastScroll = window.pageYOffset;

// Filter menu documents
const filterMenu = (e) => {
	const selected = e.target;

	// When function runs remove active menu class from all menu buttons
	menuBtns.forEach(btn => btn.classList.remove('menu--active'));

	// When function is run, for each document remove hidden class from it
	documents.forEach(doc => {
		doc.classList.remove('hidden');
	});

	// When menu is selected add active class to it and display relevant document
	switch (selected.classList[1]) {
		case 'menu--1':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('register') ? doc.classList.add('hidden') : doc.open = true);
			break;
		case 'menu--2':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('regulation') ? doc.classList.add('hidden') : doc.open = true);
			break;
		case 'menu--3':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('work') ? doc.classList.add('hidden') : doc.open = true);
			break;
		case 'menu--4':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('legitymacja') ? doc.classList.add('hidden') : doc.open = true);
			break;
		case 'menu--5':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('podstawa-programowa') ? doc.classList.add('hidden') : doc.open = true);
			break;
		case 'menu--6':
			selected.classList.add('menu--active');
			documents.forEach(doc => !doc.className.includes('upowaznienie-do-odbioru') ? doc.classList.add('hidden') : doc.open = true);
			break;
		default:
			selected.classList.add('menu--active');
			documents.forEach(doc => doc.open = false);
			break;
	}
}

// Toggle modal on a file click
const toggleModal = (e) => {

	let modalOpen = false;

	if (!modalOpen) {
		const targetLink = e.target.src;
		const targetAlt = e.target.alt;

		// Show modal and display correct image
		modalContainer.classList.remove('hidden');
		modal.src = targetLink;
		modal.alt = targetAlt;

		// If the users clicks outside of the image when modal is open, the modal will close
		window.addEventListener('click', clickedOutsideModal);
	} else {
		modalContainer.classList.add('hidden');
		window.removeEventListener('click', clickedOutsideModal);
		btnCloseModal.removeEventListener('click', closeModal);
	}
}

// Check if user clicked outside of modal
const clickedOutsideModal = (e) => {
	if (e.target.src === undefined) {
		modalContainer.classList.add('hidden');
	}
}

// Toggle navigation function
const toggleNav = () => {
	navMenu.classList.toggle('nav--hidden');
}

// Handle formspree form for subscription
const handleSubmit = async (e) => {
	e.preventDefault();
	const status = document.querySelector(".form__status");
	const data = new FormData(e.target);
	fetch(e.target.action, {
		method: subForm.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		status.textContent = "Dziękujemy, do usłyszenia!";
		status.style.marginBottom = '1rem';
		subForm.reset();
	}).catch(error => {
		status.textContent = "Wystąpił błąd. Spróbuj ponownie.";
	});
}

// Check page name on load and based in it add event listeners
const checkPageName = () => {
	const pageName = window.location.pathname.toLowerCase();
	switch (pageName) {
		case '/kalendarz.html':
			modalFiles.forEach(file => file.addEventListener('click', toggleModal));
			break;
		case '/dokumenty.html':
			menuBtns.forEach(btn => btn.addEventListener('click', filterMenu));
			break;
		default:
			return;
	}
}

// Show navigation when user scrolls up
const showNavOnScroll = () => {
	let currentScroll = window.pageYOffset;

	// If user scrolls bottom, then do not show the nav
	if (currentScroll > lastScroll) {
		navigation.style.position = 'relative';
	}
	// If current scroll is bigger than last scroll show the nav
	else if (currentScroll < lastScroll && currentScroll > 0) {
			navigation.style.position = 'fixed';
	} else {
		navigation.style.position = 'relative';
	}
	
	lastScroll = currentScroll;
}

// Event listeners
burgerBtn.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));
window.addEventListener('load', checkPageName);
window.addEventListener('scroll', showNavOnScroll);
subForm.addEventListener("submit", handleSubmit);