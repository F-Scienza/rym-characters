import React from 'react';
import './Styles/CardInfo.css'
import Picture from '../images/rym_jpg.jpg'
function CardInfo () {
    return (
			<section className="CardInfo-Container">
				<img 
					src={Picture} 
					className="CardInfo-ProfilePicture"
					alt="profilepic"
				/>
				<div className="CardInfo-Info1">
					<h2>Name</h2>
					<h4>status 🟢</h4>
				</div>
				<div className="CardInfo-Info2">
					<p>especie </p>
					<p>genero</p>
				</div>
				<div className="CardInfo-Info3">
					<p>origen.name</p>
					<p>ultima vez visto en</p>
				</div>
			</section>
		);
}

export {CardInfo} ;