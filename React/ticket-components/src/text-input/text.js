import React from 'react';
import './text.less';

class Text extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			changed: false
		}

		// Bind the handlers.
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(e) {
		this.setState({
			changed: true
		});
	}

	handleBlur(e) {
		if(this.state.changed) {
			this.setState({
				changed: false
			});

			this.props.handleChange(e);
		}
	}

	render() {
		return (
			<div className="container">
				<label className="title">{this.props.title}</label>
				{
					(this.props.handleChange) ? 
						<input className="input" onBlur={this.handleBlur} onChange={this.handleChange} type="text" />
					:
						<input className="input" type="text" />
					
				}
				
			</div>
		);
	}
}

Text.propTypes = {
	handleChange: React.PropTypes.func
}

export default Text