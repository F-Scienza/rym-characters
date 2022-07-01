import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { ChScroll } from './Components/ChScroll';
import { Searcher } from './Components/Searcher';
import { CardInfo } from './Components/CardInfo';
import ButtonPrev from './Components/ButtonPrev';
import ButtonNext from './Components/ButtonNext';

function App() {
	const [moreCharacter, setMoreCharacters] = useState('');
	const rymUrl = `https://rickandmortyapi.com/api/character/${moreCharacter}`;
	const [characters, setCharacters] = useState([]);
	const [info, setInfo] = useState({})
	const fetchCharacters = url => {
		fetch(url)
			.then(response => response.json())
			.then(data => setCharacters(data.results))
			.catch(error => console.log(error));
	};
	useEffect(() => {
		fetchCharacters(rymUrl);
	}, [rymUrl]);

	const [personaje, setPersonaje ] = useState({})

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
			{info.prev ? <ButtonPrev /> : null}
			{info.next ? <ButtonNext /> : null}
			
			<CardInfo personaje={personaje} />
		</div>
	);
}

export default App;
