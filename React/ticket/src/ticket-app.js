import React from 'react';
import Title from './containers/title-container';
import Footer from './containers/footer';

import './app.less';

const TicketApp = () => {
	return (
		<div className="app">
			<Title />
			<Footer />
		</div>
	);
}

export default TicketApp


