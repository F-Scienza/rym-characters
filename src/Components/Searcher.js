import React from 'react';
import './Styles/Searcher.css'
function Searcher({ searchValue, setSearchValue }) {

	const onSearchValueChange = event => {
		setSearchValue(event.target.value);
	};

	return (
		<input
			className="Searher"
			type="text"
			placeholder="Search character 🔎"
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}

export { Searcher }




