// DOM
const burgerBtn = document.getElementById('btn__burger');
const navMenu = document.getElementById('navigation__menu');
const navLinks = document.querySelectorAll('.nav--li');

const modalContainer = document.getElementById('modal__container');
const modal = document.getElementById('modal');
const modalFiles = document.querySelectorAll('.in-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

const subForm = document.getElementById("sub__form");

const menuBtns = document.querySelectorAll('.menu');
const documents = document.querySelectorAll('.pdf__container');

// Filter menu documents
const filterMenu = (e) => {
	const selected = e.target.className;

	if (selected.includes('menu--1')) {
		documents.forEach(doc => {
			doc.classList.remove('hidden');
			if (!doc.className.includes('register')) {
				doc.classList.add('hidden');
			}
		});
	} else if (selected.includes('menu--2')) {
		documents.forEach(doc => {
			doc.classList.remove('hidden');
			if (!doc.className.includes('regulation')) {
				doc.classList.add('hidden');
			}
		});
	} else if (selected.includes('menu--3')) {
		documents.forEach(doc => {
			doc.classList.remove('hidden');
			if (!doc.className.includes('work')) {
				doc.classList.add('hidden');
			}
		});
	} else {
		documents.forEach(doc => {
			doc.classList.remove('hidden');
		});
	}

}


// Show modal on a file click
const showModal = (e) => {
	const targetLink = e.target.src;
	const targetAlt = e.target.alt;

	// Show modal and display correct image
	modalContainer.classList.remove('hidden');
	modal.src = targetLink;
	modal.alt = targetAlt;

	// If the users clicks outside of the image when modal is open, the modal will close
	window.addEventListener('click', clickedOutsideModal);
}

// Check if user clicked outside of modal
const clickedOutsideModal = (e) => {
	if (e.target.src === undefined) {
		modalContainer.classList.add('hidden');
	}
}

const closeModal = () => {
	modalContainer.classList.add('hidden');
	window.removeEventListener('click', clickedOutsideModal);
	btnCloseModal.removeEventListener('click', closeModal);
}

// Toggle navigation function
const toggleNav = () => {
	navMenu.classList.toggle('nav--hidden');
}

// Check page name on load and based in it add event listeners
const checkPageName = () => {
	const pageName = window.location.pathname.toLowerCase();
	switch (pageName) {
		case '/kalendarz.html':
			modalFiles.forEach(file => file.addEventListener('click', showModal));
			break;
		case '/dokumenty.html':
			menuBtns.forEach(btn => btn.addEventListener('click', filterMenu));
			break;
		default:
			return;
	}
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

// Event listeners
burgerBtn.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));
window.addEventListener('load', checkPageName);
subForm.addEventListener("submit", handleSubmit);