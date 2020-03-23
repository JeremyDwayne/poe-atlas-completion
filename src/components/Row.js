import React, { Component } from 'react';
import RowStyle from './styles/RowStyle';
import PropTypes from 'prop-types';

export default class Row extends Component {
	static propTypes = {
		row: PropTypes.object.isRequired
	};
	render() {
		const { row } = this.props;
		return (
			<RowStyle className="pure-g">
				<span className="pure-u-1-3 Row-map">{row.map}</span>
				<span className="pure-u-1-24 Row-tier">{row.tier}</span>
				<span className="pure-u-1-4 Row-region">{row.region}</span>
				<span className="pure-u-1-12 Row-atlasbonus">
					<input type="checkbox" checked={row.atlasbonus}></input>
				</span>
				<span className="pure-u-1-12 Row-awakeningbonus">
					<input type="checkbox" checked={row.awakeningbonus}></input>
				</span>
				<span className="pure-u-1-12 Row-awakeningtier">
					{row.awakeningtier}
				</span>
			</RowStyle>
		);
	}
}
