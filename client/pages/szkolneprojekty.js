import Head from 'next/head';
import Link from 'next/link';

export default function SzkolneProjekty() {
	return (
		<>
			<Head>
				<title> SJPS | Szkolne projekty</title>
			</Head>

			<header className="header header--szkolne-projekty">

				<aside className="heading-wrapper">
					<h1>
						Szkolne projekty
					</h1>
				</aside>

			</header>

			<main className="main main--szkolne-projekty">

				<section className="content-wrapper content-wrapper--center">

					<h2>Szkolne Projekty</h2>

					<h4>W NOWYM ROKU SZKOLNYM NASZA SZKOŁA BĘDZIE ZAANGAŻOWANA W NASTĘPUJĄCE PROJEKTY SZKOLNE:</h4>

					<br />

					<ul>
						<li>MIĘDZYNARODOWY PROJEKT EDUKACYJNY WSPIERAJĄCY ROZWÓJ CZYTELNICTWA W KLASACH I-III ,,CZYTAM Z KLASĄ LEKTURKI SPOD CHMURKI’’</li>
					</ul>

					<br />

					<Link href={'https://www.niezbedniknauczyciela.com/czytam-z-klas%C4%85-edycja-3'}>
						<a className="link" target='blank'>Link do projektu <em>(Otwiera w nowej karcie)</em></a>
					</Link>

				</section>

			</main>

		</>
	)
}
