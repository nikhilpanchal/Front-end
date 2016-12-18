import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/reducers';
import TicketApp from './ticket-app';



let store = createStore(reducers);



ReactDOM.render(
	<Provider store={store}>
		<TicketApp />
	</Provider>,
	document.getElementById("container")
);