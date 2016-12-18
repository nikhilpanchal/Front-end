import { connect } from 'react-redux';
import FooterComp from '../components/footer';
import { switchTitle } from '../actions/Actions';

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