import { combineReducers } from 'redux';
import appReducer from './app-reducer';
import ticketReducer from './ticket-reducer';

let reducers = combineReducers({
	app: appReducer,
	ticket: ticketReducer
});

export default reducers