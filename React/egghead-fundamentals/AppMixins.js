import React from 'react';

// Higher order components or higher order functions.
// The idea is to extract common behaviour in components into a higher
// order component, so that it can be written once and that behaviour
// can then be passed to any other component that needs it.
let Mixin = (InnerComponent) => class extends React.Component {
 	// This takes in a component and returns another component
 	// the returned component will be the input component
 	// with additional state and props provided by this higher
 	// order component.
	constructor() {
		super();

		this.state = {val: 0};
		this.update = this.update.bind(this);
	}

	update() {
		this.setState({val: this.state.val+1});
	}

 	// This is using JSX Spread Attributes
 	// Where the properties of the object you pass in
 	// are copied to the component's props.
 	// https://facebook.github.io/react/docs/jsx-spread.html
	render() {
		return <InnerComponent update={this.update}
								{...this.props}
								{...this.state} />
	}
}

const Button = (props) => <button onClick={props.update}>
							{props.txt} - {props.val}
						  </button>

const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

// This is where we are creating a new component with additional behaviour added
// to the inner Button and Label components.
let ButtonMixin = Mixin(Button);
let LabelMixin = Mixin(Label);

class AppMixins extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixin txt="Button" />
				<LabelMixin txt="Label" />
			</div>
		)
	}

}

export default AppMixins;
