const initialState = [
	{text: "Initial"}
];

export default function labelReducer(state = initialState, action) {
	console.log("Received action " + action.text);
	switch (action.type) {
		case 'CREATE_FIELD': {
			return [
				...state,
				{
					text: action.text
				}
			]
		}
		default: return state;
	}

	return state;
}