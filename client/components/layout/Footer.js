import Link from "next/link";

export default function Footer() {
	return (
		<footer className='footer'>

			<h3 className="footer-heading footer-heading--blurb">SZKOLA JEZYKA POLSKIEGO SLOUGH</h3>

			<p className="footer-content footer-content--blurb">
				GŁÓWNYM ZAŁOŻENIEM SZKOŁY JEST NAUCZANIE JĘZYKA POLSKIEGO, GEOGRAFII I HISTORII POLSKI ORAZ NAUCZANIE WIARY ZGODNIE Z ZAŁOŻENIEM KOŚCIOŁA KATOLICKIEGO. NAUCZANIE DZIECI I MŁODZIEŻY W DUCHU PATRIOTYZMU ORAZ MORALNOŚCI I KULTURY OSOBISTEJ.
			</p>

			<h6 className="footer-heading footer-heading--copyright">
				© 2022 SZKOLA JEZYKA POLSKIEGO SLOUGH
			</h6>

			<h3 className="footer-heading footer-heading--more">WIECEJ</h3>

			<ul className="footer-content footer-content--more">

				<Link href='/'>
					<li>

						<a>Strona glowna</a>

					</li>
				</Link>

				<Link href='/dlaczegonaszaszkola'>
					<li>

						<a>Dlaczego nasza szkola</a>

					</li>
				</Link>

				<Link href='/kalendarz'>

					<li>

						<a>Kalendarz</a>

					</li>

				</Link>


				<Link href='/misja'>
					<li>

						<a>Misja</a>

					</li>
				</Link>

				<Link href='/wizja'>
					<li>

						<a>Wizja</a>

					</li>
				</Link>

				<Link href='/patron'>
					<li>

						<a>Patron</a>

					</li>
				</Link>

				<Link href='/programnauczania'>
					<li>

						<a>Program nauczania</a>

					</li>
				</Link>

				<Link href='/szkolneprojekty'>
					<li>

						<a>Szkolne projekty</a>

					</li>
				</Link>

				<Link href='/partnerzyszkoly'>
					<li>

						<a>Partnerzy szkoly</a>

					</li>
				</Link>

				<Link href='/kodeksucznia'>
					<li>

						<a>Kodeks Ucznia</a>

					</li>
				</Link>

				<Link href='/podreczniki'>
					<li>

						<a>Podreczniki</a>

					</li>
				</Link>

				<Link href='/obowiazkirodzicow'>
					<li>

						<a>Obowiazki rodzicow</a>

					</li>
				</Link>

				<Link href='/zapisy'>
					<li>

						<a>Zapisy</a>

					</li>
				</Link>


				<Link href='/oplaty'>
					<li>

						<a>Oplaty</a>

					</li>
				</Link>

				<Link href='/bezpieczenstwodzieci'>
					<li>

						<a>Bezpieczenstwo dzieci</a>

					</li>
				</Link>

				<Link href='/dokumenty'>
					<li>

						<a>Dokumenty</a>

					</li>
				</Link>

				<Link href='/kontakt'>
					<li>

						<a>Kontakt</a>

					</li>
				</Link>

			</ul>

			<h3 className="footer-heading footer-heading--social-media">MEDIA SPOLECZNOSCIOWE</h3>

			<ul className="footer-content footer-content--social-media">

				<li>

					<Link href='https://www.facebook.com/Szko%C5%82a-J%C4%99zyka-Polskiego-im-%C5%9Bw-Siostry-Faustyny-w-Slough-106881168296298'>
						<a target='_blank'>Facebook</a>
					</Link>

				</li>

				<li>

					<Link href='https://www.youtube.com/channel/UCa3_qpK2ESrujZNJccd3XUQ'>
						<a target='_blank'>YouTube</a>
					</Link>

				</li>

			</ul>

			<h6 className="footer-heading footer-heading--creator">

				<a href="mailto:lpytel16@gmail.com?subject=Website creation">
					Created by Lukasz Pytel
				</a>

			</h6>

		</footer >
	)
}