 export const TICKET_ACTION_TYPES = {
 	CHANGE_EXPANSION_STATE: "CHANGE_EXPANSION_STATE",
	CHANGE_ACTION: "CHANGE_ACTION",
	CHANGE_QUANTITY: "CHANGE_QUANTITY",
	CHANGE_SYMBOL: "CHANGE_SYMBOL",
	CHANGE_PRICE_TYPE: "CHANGE_PRICE_TYPE",
	CHANGE_PRICE: "CHANGE_PRICE",
	CHANGE_LIMIT_PRICE: "CHANGE_LIMIT_PRICE",
	CHANGE_ORDER_TYPE: "CHANGE_ORDER_TYPE",
	CHANGE_COMMISSION_TYPE: "CHANGE_COMMISSION_TYPE",
	CHANGE_COMMISSION: "CHANGE_COMMISSION"
};


export function changeAction(action) {
	return {
		type: TICKET_ACTION_TYPES.CHANGE_ACTION,
		value: action
	}
};

export function changeQuantity(quantity) {
	return {
		type: TICKET_ACTION_TYPES.CHANGE_QUANTITY,
		value: quantity
	}
};

export function toggleExpansionState(expansionState) {
	return {
		type: TICKET_ACTION_TYPES.CHANGE_EXPANSION_STATE,
		value: expansionState
	}
}
