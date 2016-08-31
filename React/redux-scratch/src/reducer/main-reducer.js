import labelReducer from './label-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
	labels: labelReducer
});

export default reducer