import React from 'react';
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';
import './Styles/ChScroll.css';

function ChScroll({ searchedCharacters, setPersonaje, info, setRymUrl }) {
	return (
		<section className="ChScroll-Container">
			<ul className="ChScroll-ul">
				{searchedCharacters.map((item, index) => (
					<li
						key={index}
						className="ChScroll-li"
						onClick={() => setPersonaje(item)}
					>
						{item.status === 'Dead' ? (
							<div className="ChScroll-ChImg-Dead">
								<img
									className="Profile-Picture"
									src={item.image}
									alt="profilepic"
								/>
							</div>
						) : (
							<div className="ChScroll-ChImg-Alive">
								<img
									className="Profile-Picture"
									src={item.image}
									alt="profilepic"
								/>
							</div>
						)}
					</li>
				))}
			</ul>
			<ButtonPrev info={info} setRymUrl={setRymUrl} />
			<ButtonNext info={info} setRymUrl={setRymUrl} />
		</section>
	);
}

export { ChScroll };
