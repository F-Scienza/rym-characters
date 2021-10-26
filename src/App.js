import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { ChScroll } from './Components/ChScroll'
import { Searcher } from './Components/Searcher';
import { CardInfo } from './Components/CardInfo';

function App() {
	const [characters, setCharacters] = useState([]);
	const rymUrl = 'https://rickandmortyapi.com/api/character';
	const fetchCharacters = url => {
		fetch(url)
			.then(response => response.json())
			.then(data => setCharacters(data.results))
			.catch(error => console.log(error));
	};
	useEffect(() => {
		fetchCharacters(rymUrl);
	}, []);


	const [ pick, setPick ] = useState('1');
	const [ pickedCharacter, setPickedCharacter ] = useState(null)
	const pickedCharacterUrl = `${rymUrl}/${pick}`
	const fetchCharactersPicked = url2 => {
		fetch(url2)
			.then(response => response.json())
			.then(dataPicked => console.log(dataPicked))
			.then(dataPicked => setPickedCharacter(dataPicked))
			.catch(error => console.log(error));
	};
	
	useEffect(() => {
		fetchCharactersPicked(pickedCharacterUrl);
	}, [pickedCharacterUrl]);
	
return (
	<div className="App">
		<Header />
		<Searcher />
		<ChScroll characters={characters} setPick={setPick} />
		<CardInfo pickedCharacter={pickedCharacter} />
	</div>
);
}

export default App;
