import React, { Component } from 'react';

export default class TableHeader extends Component {
	render() {
		return (
			<div className="pure-g">
				<h3 className="pure-u-1-3">Map</h3>
				<h3 className="pure-u-1-24">Base Tier</h3>
				<h3 className="pure-u-1-4">Atlas Region</h3>
				<h3 className="pure-u-1-12">Atlas Bonus</h3>
				<h3 className="pure-u-1-12">Awakening Bonus</h3>
				<h3 className="pure-u-1-12">Awakening Tier</h3>
			</div>
		);
	}
}
