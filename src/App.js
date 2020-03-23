import React from 'react';
import './App.css';
import Row from './components/Row';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>POE Atlas Progress</h1>
			</header>
			<main className="App-main">
				<Row
					row={{
						map: 'Beach',
						tier: 1,
						region: 'Glennach Cairns',
						atlasbonus: true,
						awakeningbonus: false,
						awakeningtier: '14-1'
					}}
				></Row>
				<button className="pure-button-primary pure-button">
					Test Button
				</button>
			</main>
			<footer className="App-footer">&copy;2020 Jeremy Winterberg</footer>
		</div>
	);
}

export default App;
