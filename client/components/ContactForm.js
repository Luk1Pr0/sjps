import { useState } from 'react';

// COMPONENTS
import Loader from './Loader';

export default function ContactForm() {

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		message: '',
	});

	const [responseType, setResponseType] = useState('');

	// STATE OF LOADER
	const [showLoader, setShowLoader] = useState(false);

	// ON FORM SUBMIT, SEND THIS FORM DATA TO BACKEND
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// SHOW LOADER
			setShowLoader(true);

			// POST FORM DATA
			const data = fetch('http://192.168.0.101:5000/kontakt', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});

			// RESPONSE AFTER FORM SUBMISSION
			const response = await data;

			// IF RESPONSE IS OK, SHOW SUCCESSFULL NOTIFICATION TO USER ELSE SHOW THAT ERROR OCCURRED
			response.ok ?
				setResponseType('Formularz został pomyślnie wysłany')
				:
				setResponseType('Wystąpił błąd, spróbuj ponownie, lub wyślij nam mail\'a na powyższy adres email');

			// CLEAR FORM INPUTS
			setFormData({ fullName: '', email: '', message: '' });

		} catch (err) {
			console.error('error', err);
		}

		// HIDE THE RESPONSE NOTIFICATION
		setTimeout(() => setResponseType(''), 3000);

		// HIDE LOADER
		setShowLoader(false);
	}

	// ON CHANGE OF INPUTS UPDATE STATE
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (

		<div className="form-wrapper">

			{/* SHOW LOADER WHEN SENDING DATA TO SERVER */}
			{showLoader && <Loader />}

			<div className={`form-status ${responseType && 'form-status--active'} `}>
				<h4>
					{responseType}
				</h4>
			</div>

			<form id='form' className="form form--contact" onSubmit={handleSubmit}>

				<label htmlFor="fullName" className='label'>
					Imie i nazwisko *
					<input id='fullName' name='fullName' type="text" className='input' placeholder='Imie i nazwisko' required onChange={handleChange} value={formData.fullName} />
				</label>

				<label htmlFor="email" className='label'>
					Email *
					<input id='email' name='email' type="email" className='input' placeholder='Adres email' required onChange={handleChange} value={formData.email} />
				</label>

				<label htmlFor="message" className='label'>
					Wiadomosc *
					<textarea id='message' name='message' type="text" className='textarea' placeholder='Tresc wiadomosci' required onChange={handleChange} value={formData.message} />
				</label>

				<div className="btn-container">

					<button type="submit">Wyslij</button>

					<button type="reset">Anuluj</button>

				</div>

			</form>

		</div>
	)
}