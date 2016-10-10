import { connect } from 'react-redux';
import FooterComp from '../components/footer';
import { switchTitle, ACTION_SWITCH_TITLE } from '../actions/Actions';

const Footer = connect(
	null,
	// mapDispatchToProps
	(dispatch) => {
		return {
			switchTitle: (text) => {
				dispatch(switchTitle(text))
			}
		}
	}
)(FooterComp);

export default Footer