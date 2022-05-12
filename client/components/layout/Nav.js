import { useState } from 'react';
import Link from 'next/link';
import favicon from '../../public/favicon.png';

export default function Nav() {

	const [showNav, setShowNav] = useState(false);

	const closeNavigation = () => {
		setShowNav(false);
	}

	return (
		<nav className="nav">

			<Link href='/'>
				<div className="logo-container" title='Glowna'>
					<img src={favicon.src} alt="" className='logo' />
				</div>
			</Link>

			<button className={`burger-container ${showNav ? 'burger-container--active' : ''}`} onClick={() => setShowNav(!showNav)}>
				<div className="burger burger--1"></div>
				<div className="burger burger--2"></div>
				<div className="burger burger--3"></div>
			</button>

			<ul className={`nav-ul ${showNav ? 'nav-ul--active' : ''}`}>

				<li className="nav-li">

					<label htmlFor="glownaToggle" className='toggle-label'>

						<a className="nav-a">
							Glowna
							<i className="fa-solid fa-chevron-down"></i>
						</a>

					</label>

					<input type="checkbox" id="glownaToggle" />

					<ul className="subnav-ul">

						<Link href='/'>
							<li className="subnav-li" onClick={closeNavigation}><a className="subnav-a">Glowna</a></li>
						</Link>

						<Link href='dlaczegonaszaszkola'>
							<li className="subnav-li" onClick={closeNavigation}><a className="subnav-a">Dlaczego nasza szkola?</a></li>
						</Link>

					</ul>

				</li>

				<li className="nav-li">

					<label htmlFor="szkolaToggle" className='toggle-label'>

						<a className="nav-a">
							Szkola
							<i className="fa-solid fa-chevron-down"></i>
						</a>

					</label>

					<input type="checkbox" id="szkolaToggle" />

					<ul className="subnav-ul">

						<Link href='kalendarz'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Kalendarz</a>
							</li>
						</Link>

						<Link href='misja'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Misja</a>
							</li>
						</Link>

						<Link href='wizja'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Wizja</a>
							</li>
						</Link>

						<Link href='patron'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Patron</a>
							</li>
						</Link>

						<Link href='programnauczania'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Program Nauczania</a>
							</li>
						</Link>

						<Link href='szkolneprojekty'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Szkolne Projekty</a>
							</li>
						</Link>

						<Link href='partnerzyszkoly'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Partnerzy szkoly</a>
							</li>
						</Link>

					</ul>

				</li>

				<li className="nav-li">

					<label htmlFor="uczniowieToggle" className='toggle-label'>

						<a className="nav-a">
							Uczniowie
							<i className="fa-solid fa-chevron-down"></i>
						</a>

					</label>

					<input type="checkbox" id="uczniowieToggle" />

					<ul className="subnav-ul">

						<Link href='kodeksucznia'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Kodeks ucznia</a>
							</li>
						</Link>

						<Link href='podreczniki'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Podreczniki</a>
							</li>
						</Link>

					</ul>

				</li>

				<li className="nav-li">

					<label htmlFor="rodziceToggle" className='toggle-label'>

						<a className="nav-a">
							Rodzice
							<i className="fa-solid fa-chevron-down"></i>
						</a>

					</label>

					<input type="checkbox" id="rodziceToggle" />

					<ul className="subnav-ul">

						<Link href='obowiazkirodzicow'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Obowiazki Rodzicow</a>
							</li>
						</Link>

						<Link href='zapisy'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Zapisy</a>
							</li>
						</Link>

						<Link href='oplaty'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Oplaty</a>
							</li>
						</Link>

						<Link href='bezpieczenstwodzieci'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Bezpieczenstwo dzieci</a>
							</li>
						</Link>

						<Link href='dokumenty'>
							<li className="subnav-li" onClick={closeNavigation}>
								<a className="subnav-a">Dokumenty</a>
							</li>
						</Link>

					</ul>

				</li>

				<Link href='kontakt'>
					<li className="nav-li" onClick={closeNavigation}>
						<a className="nav-a clickable">Kontakt</a>
					</li>
				</Link>

			</ul>

		</nav >
	)
}