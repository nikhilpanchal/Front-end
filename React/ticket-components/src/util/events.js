import React from 'react';

let EventMixin = function(InnerComponent) {
	return class Events extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				changed: false
			}

			this.handleChange = this.handleChange.bind(this);
			this.handleBlur = this.handleBlur.bind(this);
		}

		handleChange(e) {
			if(this.props.changeBlur) {
				this.setState({changed: true});
			}

			if(this.props.handleChange) {
				this.props.handleChange(e);
			}
		}

		handleBlur(e) {
			if(this.props.changeBlur && this.state.changed) {
				this.setState({changed: false});

				this.props.changeBlur(e);
			}

			if(this.props.handleBlur) {
				this.props.handleBlur(e);
			}
		}

		render() {
			return (
				<InnerComponent {...this.props}
							handleBlur={this.handleBlur} 
							handleChange={this.handleChange} 
							 />
			)
		} 
	}
}

EventMixin.propTypes = {
	changeBlur: React.PropTypes.func
}

export default EventMixin