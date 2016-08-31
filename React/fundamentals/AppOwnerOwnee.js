import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			txt: "This is the initial state"
		}

		// event handler functions of the class can be bound to this right here as well
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			txt: e.target.value
		})
	}

	render() {
		// Since we have already bound this.update in the constructor
		// we can just go ahead and use it directly here.

		// The state object and handler functions can be passed from the
		// parent (container) component to the child components as properties
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>	
		);
	}
}


// New Component
const Widget = (props) => {
	return (
			// This child component can refer to items passed in via props.
			<div>
				<input type="text" onChange={props.update}/>
				<h1>{props.txt}</h1>
			</div>
	)
}

export default App;

