import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './reducers/app-reducer';
import TicketApp from './ticket-app';


let store = createStore(appReducer);



ReactDOM.render(
	<Provider store={store}>
		<TicketApp />
	</Provider>,
	document.getElementById("container")
);