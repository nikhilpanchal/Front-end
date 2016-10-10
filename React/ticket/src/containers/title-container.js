import { connect } from 'react-redux';
import TitleComp from '../components/title-component';

const Title = connect(
	// mapStateToProps
	(state) => {
		return {
			titleText: state.title
		}
	}
)(TitleComp);

export default Title