import React from 'react';
import './Styles/ButtonNext.css';
import button from '../images/next.png';

function ButtonNext({ info, setRymUrl }) {
	const nextUrl = info.next;

	const loadCharacters = () => {
		setRymUrl(nextUrl);
	};

	return (
		<button type="button" onClick={loadCharacters}>
			<img className="button-img" src={button} alt='img'></img>
		</button>
	);
}

export default ButtonNext;
