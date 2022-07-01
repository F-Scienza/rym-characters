import React from 'react';
import './Styles/CardInfo.css'

function CardInfo(personaje) {
	let personajeparseado = personaje.personaje
	let image = personajeparseado.image
	let name = personajeparseado.name
	let status = personajeparseado.status
	let species = personajeparseado.species
	let gender = personajeparseado.gender

	return (
		<section className="CardInfo-Container" >
			<img src={image} className="CardInfo-ProfilePicture" alt="profilepic" />
			<div className="CardInfo-Info1">
				<h2>{name}</h2>
				<p>
					<strong>{status}</strong>
				</p>
			</div>
			<div className="CardInfo-Info2">
				<p>
					<strong>Specie:</strong> {species}
				</p>
			</div>
			<div className="CardInfo-Info3">
				<p>
					<strong>Gender:</strong> {gender}
				</p>
			</div>
		</section>
	);
}

export { CardInfo } ;