import React from 'react';
import ReactDOM from 'react-dom';

class AppState extends React.Component {
	constructor() {
		super();

		this.state = {
			txt: 'this is the starting state txt',
			cat: 5
		};
	}

	update(e) {
		// It is important in JSX to bind "this" to the handler.
		// otherwise when the handler is invoked, this would be undefined.

		// Additionally, it is important to set state using the setState() function.
		// this.state.txt = "blah" will not work (refresh the UI).
		this.setState({txt: e.target.value})
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.update.bind(this)}/>
				<h1>{this.state.txt}</h1>
			</div>
		)
	}

}

export default AppState;