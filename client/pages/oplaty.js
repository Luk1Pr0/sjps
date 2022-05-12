import Head from 'next/head';

export default function Oplaty() {
	return (
		<>
			<Head>
				<title> SJPS | Oplaty </title>
			</Head>

			<header className="header header--oplaty">

				<aside className="heading-wrapper">
					<h1>
						Oplaty
					</h1>
				</aside>

			</header>

			<main className="main main--oplaty">

				<section className="content-wrapper content-wrapper--center">

					<h2>CZESNE I TERMINY PŁATNOŚCI</h2>

					<div className='text--left'>
						<h4>OPŁATY ZA SZKOŁE W ROKU SZKOLNYM 2021/22 WYNOSZĄ:</h4>
					</div>

					<br />

					<ul>

						<li>PIERWSZE DZIECKO <strong>£285 / ROK</strong>
						</li>
						<li>DRUGIE DZIECKO <strong>£210 / ROK</strong>
						</li>
						<li>TRZECIE I KAŻDE KOLEJNE DZIECKO <strong>£160 / ROK</strong>
						</li>

					</ul>

					<br />

					<p>
						ZAPISUJĄC DZIECKO DO SZKOŁY NALEŻY WPŁACIĆ DEPOZYT W WYSOKOŚCI £50 DO 20 SIERPNIA 2021 ROKU, OPŁATA ZA CZESNE BĘDZIE POMNIEJSZONA O KWOTE WCZESNIEJ WPŁACONEGO DEPOZYTU.
					</p>

					<br />

					<p>
						WARUNKIEM KONTYNUOWANIA NAUKI W SZKOLE JEST UREGULOWANIE CAŁEJ KWOTY ZA PIERWSZE DZIECKO DO KOŃCA WRZESNIA 2021, A ZA DRUGIE I TRZECIE DZIECKO DO 31 PAŹDZIERNIKA 2021. W PRZYPADKU REZYGNACJI ZE SZKOŁY W TRAKCIE ROKU SZKOLNEGO, OPŁATY NIE BEDĄ ZWRACANE.
					</p>

					<br />

					<p>W PRZYPADKU JAKICHKOLWIEK WĄTPLIWOŚCI, PROSIMY O KONTAKT NA ADRES E-MAIL: <a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Oplaty za szkole" className="link">szkolajezykapolskiegoslough@gmail.com</a></p>

					<br />

					<p><em>*KOSZT PODRĘCZNIKOW SZKOLNYCH NIE JEST WLICZANY W OPŁATE ZA SZKOŁE.</em></p>

				</section>

				<section className="content-wrapper content-wrapper--center">

					<h4 className='text--left'>DANE KONTA BANKOWEGO</h4>

					<br />

					<div className="text--left">

						<p>
							<strong>Typ konta:</strong> Business account
						</p>

						<p>
							<strong>Nazwa konta:</strong> Saint Sister Faustyna Polish Language School
						</p>

						<p>
							<strong>Numer konta:</strong> 53972341
						</p>

						<p>
							<strong>Sort code:</strong> 01 - 08 - 15
						</p>

						<br />

						<p>
							<strong>Czesne tytulem:</strong> IMIE I NAZWISKO UCZNIA + AKTUALNA KLASA + CZESNE / DEPOZYT (NP. ANNA NOWAK KL.2 CZESNE)
						</p>

					</div>

				</section>

			</main>
		</>
	)
}
