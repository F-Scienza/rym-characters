import React from 'react';
import './Styles/ButtonNext.css';
import prev from '../images/prev.png'
function ButtonPrev({ info, setRymUrl }) {
	const prevUrl = info.prev;

	const loadCharacters = () => {
		setRymUrl( prevUrl );
	};

	return (
		<button className="prev" type="button" onClick={loadCharacters}>
			<img className="button-img" src={prev} alt='img'></img>
		</button>
	);
}

export default ButtonPrev;
