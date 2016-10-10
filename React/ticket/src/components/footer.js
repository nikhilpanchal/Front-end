import React from 'react';


class FooterComp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		}
	}

	render() {
		return (
			<div>
				<button type="button" 
					name="titleSwitch"
					onClick={() => {
						let title = (++this.state.counter % 2) ? "TOE: Title Order Entry" : "TOE: Trade Order Entry";

						this.props.switchTitle(title);
					}}>
					Switch Title
				</button>
			</div>
		);
	}
}

export default FooterComp