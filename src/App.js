import React from 'react';
import './App.css';
import Row from './components/Row';
import TableHeader from './components/TableHeader';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>POE Atlas Progress</h1>
			</header>
			<main className="App-main">
				<TableHeader></TableHeader>
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
				<Row
					row={{
						map: 'Jungle Valley',
						tier: 1,
						region: 'Lex Proxima',
						atlasbonus: true,
						awakeningbonus: false,
						awakeningtier: '14-1'
					}}
				></Row>
				<Row
					row={{
						map: 'Pier',
						tier: 1,
						region: "Valdo's Rest",
						atlasbonus: true,
						awakeningbonus: false,
						awakeningtier: '14-1'
					}}
				></Row>
				<Row
					row={{
						map: 'Wharf',
						tier: 1,
						region: "Tirn's End",
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
