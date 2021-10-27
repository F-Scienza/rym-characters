import React from 'react';
import './Styles/CardInfo.css'

function CardInfo(pickedCharacter) {

	let pickedCh = pickedCharacter.pickedCharacter
	let image = pickedCh.image
	let name = pickedCh.name
	let status = pickedCh.status
	let species = pickedCh.species
	let gender = pickedCh.gender

	const clicksection = () => console.log(pickedCharacter.pickedCharacter.location.name);

	return (
		<section className="CardInfo-Container" onClick={clicksection}>
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