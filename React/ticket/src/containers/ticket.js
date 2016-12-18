import { connect } from 'react-redux';
import Ticket from '../components/ticket/ticket';
import { changeAction, 
		 changeQuantity, 
		 toggleExpansionState } from '../actions/TicketActions';

const TicketContainer = connect(
	// mapStateToProps
	(state, ownProps) => {
		return {
			ticket: state.ticket.activeTicket,
			indexNum: state.ticket.indexNum
		}
	},
	// mapDispatchToProps
	(dispatch, ownProps) => {
		return {
			changeAction: (e) => {
				dispatch(changeAction(e.target.value));
			},
			changeQuantity: (e) => {
				dispatch(changeQuantity(parseInt(e.target.value, 10)));
			},
			changeSymbol: (e) => {
				console.log(`Symbol set to ${e.target.value}`);
			},
			changePrice: (e) => {
				console.log(`Price set to ${e.target.value}`);
			},
			toggleExpansionState: (e) => {
				dispatch(toggleExpansionState())
			}
		}
	}
)(Ticket);

export default TicketContainer