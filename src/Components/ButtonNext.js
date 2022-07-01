import React from 'react';
import './Styles/ButtonNext.css'

function ButtonNext({ setMoreCharacters }) {

    const [ page, setPage ] = React.useState(2)

	const loadCharacters = () => {
        setMoreCharacters(`?page=${page}`)
		setPage(page+1);
	};

	return (
		<button 
            type="button" 
            onClick={loadCharacters}
        >
			➡
		</button>
	);
}

export default ButtonNext;