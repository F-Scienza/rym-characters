import React from 'react';
import './Styles/CardInfo.css'

function CardInfo(pickedCharacter) {

	let { image, name, status, species, gender, location, origin } =
		pickedCharacter;

	const clicksection = () =>
		console.log(image, name, status, species, gender, location, origin);
	
	return (
		<section className="CardInfo-Container"
			onClick={clicksection}
		>
			<img src={image} className="CardInfo-ProfilePicture" alt="profilepic" />
			<div className="CardInfo-Info1">
				<h2>{name}</h2>
				<p>{status}</p>
			</div>
			<div className="CardInfo-Info2">
				<p>{species}</p>
				<p>{gender}</p>
			</div>
			<div className="CardInfo-Info3">
				<p>{location}</p>
				<p>{origin}</p>
			</div>
		</section>
	);
}

export { CardInfo } ;