import Link from 'next/link';

export default function Card({ title, link, image, description }) {
	return (
		<Link href={link}>
			<a>

				<div className="card">

					<img src={image.src} alt={image.description} className="card-img" />

					<h4>{title}</h4>

				</div>

			</a>
		</Link>
	)
}