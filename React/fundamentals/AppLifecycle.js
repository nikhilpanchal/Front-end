import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			val: 0
		}

		this.update = this.update.bind(this);
	}

	update() {
		this.setState({
			val: this.state.val+1
		})
	}

	componentWillMount() {
		// Component about to be mounted on the DOM, setup the pre-work here.
		console.log("Component will mount..");
		this.state.m = 2;
	}

	render() {
		console.log("Rendering...");

		return (
			<button onClick={this.update}>
				{this.state.val * this.state.m}
			</button>
		)
	}

	componentDidMount() {
		// Component has just been mounted, do any initialization here.
		console.log("Component did mount..");

		// Calling the update on the mounted component.
		this.state.inc = setInterval(this.update, 1000)
	}

	shouldComponentUpdate(nextProps, nextState) {
		// returns a boolean to determine whether the component should update or not.
		let decider = this.state.val % 5 === 0;
		console.log(decider);

		return decider;
	}

	componentWillReceiveProps(nextProps) {
		// The props that the component will receive.
	}

	componentDidUpdate(prevProps, prevState) {
		// Gets fired if the component actually got updated on the DOM
		console.log("The component did update: prevState ", prevState);
	}

	componentWillUnmount() {
		// Perform any clean up on this component before it is removed from the DOM.
		console.log("Unmounted...");

		clearInterval(this.state.inc)
	}
}

class Wrapper extends React.Component {
	constructor() {
		super();
	}

	mount() {
		ReactDOM.render(<App />, document.getElementById('a'));
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper;