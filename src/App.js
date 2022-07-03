import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { ChScroll } from './Components/ChScroll';
import { Searcher } from './Components/Searcher';
import { CardInfo } from './Components/CardInfo';
import ButtonPrev from './Components/ButtonPrev';
import ButtonNext from './Components/ButtonNext';
import initialState from './initialState';

function App() {
	const apiRymUrl = `https://rickandmortyapi.com/api/character`;
	const [rymUrl, setRymUrl] = useState(apiRymUrl);

	const [characters, setCharacters] = useState(initialState.results);
	const [info, setInfo] = useState(initialState.info);
	const [totalData, setTotalData] = useState(initialState);

	const fetchCharacters = url => {
		fetch(url)
			.then(response => response.json())
			.then(data => setTotalData(data))
			.catch(error => console.log(error));
	};
	useEffect(() => {
		fetchCharacters(rymUrl);
		setInfo(totalData.info);
		setCharacters(totalData.results);
	}, [rymUrl, totalData]);

	const [personaje, setPersonaje] = useState(initialState.results[0]);

	let searchedCharacters;
	const [searchValue, setSearchValue] = React.useState('');

	if (!searchValue.length >= 1) {
		searchedCharacters = characters;
	} else {
		searchedCharacters = characters.filter(character => {
			const characterText = character.name.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return characterText.includes(searchText);
		});
	}

	return (
		<div className="App">
			<Header />
			<Searcher searchValue={searchValue} setSearchValue={setSearchValue} />
			<ChScroll
				searchedCharacters={searchedCharacters}
				setPersonaje={setPersonaje}
			/>
			{ info.prev && <ButtonPrev setRymUrl={setRymUrl} info={info} /> }
			{ info.next && <ButtonNext setRymUrl={setRymUrl} info={info}/> }
			<CardInfo personaje={personaje} />
		</div>
	);
}

export default App;
