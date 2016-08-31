import React from 'react';

class AddField extends React.Component {
	render() {
		return (
			<button type="submit" onClick={this.props.onClick}>Add Field</button>
		)
	}
}

export default AddField