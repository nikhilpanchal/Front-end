
import { ACTION_SWITCH_TITLE } from '../actions/Actions';

let initialState = {
	title: "TOE: Trade Order Entry"
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_SWITCH_TITLE: {
			return {
				title: action.text
			}
		}
		default: return initialState;
	}
}