import Head from 'next/head';
import '../styles/globals.scss';

// CONTEXT
import { ModalProvider } from '../context/ModalContext/ModalContext';

// COMPONENTS
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

// FAVICON
import Favicon from '../public/favicon.png';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ModalProvider>

				<Head>
					<title>SJPS | Szkola Jezyka Polskiego Slough</title>
					<link rel="icon" type="image/png" href={Favicon.src} />
				</Head>

				<Nav />

				<Component {...pageProps} />

				<Footer />

			</ModalProvider>
		</>
	)
}

export default MyApp;
