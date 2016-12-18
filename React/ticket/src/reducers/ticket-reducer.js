import Ticket from '../model/ticket';
import { TICKET_ACTION_TYPES } from '../actions/TicketActions';

let initialState = {
	activeTicket: new Ticket(),
	indexNum: 1
};

function getNewTicketState(ticketState, ticketField, ticketValue) {
	let ticket = Object.assign({}, ticketState.activeTicket);
	ticket[ticketField].value = ticketValue;

	return Object.assign({}, ticketState, {
		activeTicket: ticket
	});
}


/**
 * Ticket Reducer. Will manage the ticket section of the state
 */
function ticketReducer(ticketState = initialState, action) {
	switch(action.type) {
		case TICKET_ACTION_TYPES.CHANGE_EXPANSION_STATE: {
			// We might need another reducer to handle such display centric actions
			let expanded = !ticketState.activeTicket.expanded;
			let ticket = Object.assign({}, ticketState.activeTicket, {expanded: expanded});

			// create a new state
			return Object.assign({}, ticketState, {
				activeTicket: ticket
			})


			// Might work once babel modules are updated.
			// return Object.assign({}, ticketState, {
			// 	activeTicket: {
			// 		...ticketState.activeTicket,
			// 		expanded: !ticketState.activeTicket.expanded
			// 	}
			// })
		}
		case TICKET_ACTION_TYPES.CHANGE_ACTION: {
			return getNewTicketState(ticketState, "action", action.value);
		}
		case TICKET_ACTION_TYPES.CHANGE_QUANTITY: {
			return getNewTicketState(ticketState, "quantity", action.value);
		}
		default: {
			return ticketState;
		}
	}
}

export default ticketReducer
