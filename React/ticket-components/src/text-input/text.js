"use strict";

import React from 'react';

class Text extends React.Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
		// this.state = {
		// 	value: props.value
		// }
	}


	// handleChange(e) {
	// 	this.setState({
	// 		value: e.target.value
	// 	})

	// 	if(this.props.handleChange) {
	// 		this.props.handleChange(e);
	// 	}
	// }

	render() {
		return (
			<div className="container">
				<label className="title">{this.props.title}</label>
				<input className="input" 
						onBlur={this.props.handleBlur} 
						onChange={this.props.handleChange} 
						type={this.props.type}
						defaultValue={this.props.value}/>	
			</div>
		);
	}
}

Text.propTypes = {
	title: React.PropTypes.string,
	handleBlur: React.PropTypes.func,
	handleChange: React.PropTypes.func
}

export default Text