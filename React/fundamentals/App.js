import React from 'react';
import ReactDOM from 'react-dom';

// Class used to create stateful components.
class App extends React.Component {
	// Main method that is responsible for this components visual.
	// Required to return elements that will be rendered on the browser.
	render() {
		// This is only allowed to return a single node.

		//Data passed via attributes can be accessed at this.props
		let txt = this.props.txt;
		return (
			<div>
				<div>Hello, World!</div>
				<div>{txt}</div>
				<div>{this.props.other}</div>
				<div>{this.props.cat}</div>
			</div>	
		)
	}
}

// You can also use const to create stateless components.
// const App = () => <h1>Hello, Eggheads !</h1>


// Set the default values on properties (props) using defaultProps
App.defaultProps = {
	other: "This is the default text for the other property"
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}


// Use ReadDOM.render to render the component directly from here.
ReactDOM.render(
	// Pass data using props.
	<App txt="This is the text for props" cat={5}/>, document.getElementById('app')
)


export default App