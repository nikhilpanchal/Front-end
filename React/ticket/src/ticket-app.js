import React from 'react';
import Title from './containers/title';
import Footer from './components/footer';
import TicketContainer from './containers/ticket';
import Ticket from './model/ticket';

import './app.less';

const TicketApp = () => {
	return (
		<div className="app">
			<Title />
			<TicketContainer/>
			<Footer />
		</div>
	);
}

export default TicketApp


