import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}

		// event handler functions of the class can be bound to this right here as well
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}

	render() {
		// Since we have already bound this.update in the constructor
		// we can just go ahead and use it directly here.

		// The state object and handler functions can be passed from the
		// parent (container) component to the child components as properties
		return (
			<div>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br />
			</div>	
		);
	}
}

// Create a stateful component.
class Slider extends React.Component {
	render() {
		// Since this is a stateful component, props needs to be referred to by
		// this.props
		return (
			// This child component can refer to items passed in via props.
			<div>
				<span className="glyphicon glyphicon-heart"></span>
				<input ref="inp" type="range" min="0" max="255" onChange={this.props.update}/>
			</div>
		)	 
	}
}

export default App;

