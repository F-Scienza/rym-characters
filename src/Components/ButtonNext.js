import React from 'react';
import './Styles/ButtonNext.css';

function ButtonNext({ info, setRymUrl }) {
	const nextUrl = info.next;

	const loadCharacters = () => {
		console.log(info)
		setRymUrl(nextUrl);
	};

	return (
		<button type="button" onClick={loadCharacters}>
			➡
		</button>
	);
}

export default ButtonNext;
