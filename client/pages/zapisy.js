import Head from 'next/head';

export default function Zapisy() {
	return (
		<>
			<Head>
				<title> SJPS | Zapisy</title>
			</Head>

			<header className="header header--zapisy">

				<aside className="heading-wrapper">
					<h1>
						Zapisy
					</h1>
				</aside>

			</header>

			<main className="main main--zapisy">

				<section className="content-wrapper content-wrapper--center">

					<h2>Zapisz dziecko</h2>

					<p>
						JEŚLI CHCĄ PAŃSTWO ZAPISAĆ SWOJE DZIECKO DO NASZEJ SZKOŁY, SERDECZNIE PROSIMY O WYDRUKOWANIE PONIŻSZEGO FORMULARZA, WYPEŁNIENIE GO ORAZ WYSŁANIE NA NASZ EMAIL: <span><a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Zapisy do polskiej szkoly" className="link">szkolajezykapolskiegoslough@gmail.com</a></span>
					</p>

				</section>

				<section className="content-wrapper content-wrapper--center">

					<p className="text--center">
						<a className="link" href="./dokumenty/formularz-rejestracyjny.pdf" target='_blank'>Formularz rejestracyjny <em>(Otwiera w nowej karcie)</em></a>
					</p>

				</section>

			</main>

		</>
	)
}
