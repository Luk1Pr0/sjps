import { useContext } from 'react';

import Head from 'next/head';

// CONTEXT AND ACTIONS
import { ModalContext } from '../context/ModalContext/ModalContext';
import actions from '../context/actions';

// COMPONENTS
import ImageModal from '../components/ImageModal';

// IMAGES
import Kalendarz1 from '../public/kalendarz/kalendarz-part_1.webp';
import Kalendarz2 from '../public/kalendarz/kalendarz-part_2.webp';

export default function Kalendarz() {

	const { modalSource, dispatchModalEvent } = useContext(ModalContext);

	// HANDLE CLICK
	const handleClick = (e) => {
		const selectedImage = e.target.src;
		dispatchModalEvent(actions.OPEN_MODAL, selectedImage);
	}

	return (
		<>
			<Head>
				<title> SJPS | Kalendarz</title>
			</Head>

			<header className="header header--kalendarz">

				<aside className="heading-wrapper">
					<h1>
						Kalendarz
					</h1>
				</aside>

			</header>

			<main className="main main--kalendarz">

				<section className="content-wrapper content-wrapper--center">

					<h2>KALENDARZ 2021/22</h2>

					<p>
						ZAJĘCIA W ROKU SZKOLNYM <strong>2021/22</strong> ROZPOCZYNAMY <strong>11 WRZEŚNIA 2021</strong>. ZAJĘCIA NA GRUPĘ PORANNĄ ROZPOCZYNAJĄ SIĘ O GODZ. <strong>8:50</strong>, A KOŃCZĄ O <strong>12:20</strong>. W NOWYM ROKU SZKOLNYM MAMY 35 SOBÓT. KALENDARZ NA ROK SZKOLNY 2020/21 ZAMIESZCZAMY PONIŻEJ.
					</p>

				</section>

				<section className="content-wrapper content-wrapper--center content-wrapper--full-width">

					<div className="img-container" onClick={handleClick}>
						<img src={Kalendarz1.src} alt='Zdjecie kalendarza na lata 2021/22 - 1' className="img clickable" />
					</div>

					<div className="img-container" onClick={handleClick}>
						<img src={Kalendarz2.src} alt="Zdjecie kalendarza na lata 2021/22 - 2" className="img clickable" />
					</div>

				</section>

			</main>

			{
				// IF IMAGE IS CLICKED ON, SHOW MODAL
				modalSource !== null ? <ImageModal image={modalSource} /> : null
			}

		</>
	)
}
