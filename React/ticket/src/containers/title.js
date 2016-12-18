import { connect } from 'react-redux';
import TitleComp from '../components/title-component';


const Title = connect(
	// mapStateToProps
	(state, ownProps) => {
		return {
			titleText: state.app.title
		};
	}
)(TitleComp);

export default Title