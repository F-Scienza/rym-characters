import React from 'react';
import './Styles/ButtonNext.css';

function ButtonPrev({ info, setRymUrl }) {
	const prevUrl = info.prev;

	const loadCharacters = () => {
		setRymUrl = prevUrl;
	};

	return (
		<button className='prev' type="button" onClick={loadCharacters}>
			⬅
		</button>
	);
}

export default ButtonPrev;
