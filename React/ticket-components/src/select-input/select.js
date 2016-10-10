"use strict";

import React from 'react';

class Select extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container">
				<label className="title">{this.props.title}</label>
				<select onChange={this.props.handleChange}
						onBlur={this.props.handleBlur} 
						defaultValue={this.props.selected}>
						{this.props.values.map(function(value, i) {
							return <option key={i} value={value}>{value}</option>
						}, this)}
				</select>
			</div>
		);
	}
}

export default Select