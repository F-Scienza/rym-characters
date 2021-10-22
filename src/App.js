import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { ChScroll } from './Components/ChScroll'
import { Searcher } from './Components/Searcher';
import { CardInfo } from './Components/CardInfo';
function App() {
	const [characters, setCharacters] = useState([])
	
	const rymUrl = 'https://rickandmortyapi.com/api/character'

	const fetchCharacters = (url) => {
		fetch(url)
			.then(response => response.json())
			.then(data => setCharacters(data.results))
			.catch(error => console.log(error))
	}
	useEffect(()=>{
		fetchCharacters(rymUrl)
	}, [])

return (
		<div className="App">
			<Header />
			<Searcher />
			<ChScroll />
			<CardInfo />
		</div>
	);
}

export default App;
