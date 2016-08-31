import { connect } from 'react-redux';
import FormFieldList from '../components/form-field-list';

const FieldContainer = connect(
	//statetoProps,
	(state) => {
		return {
			labels: state.labels
		}
	},
	//dispatchToProps
	null
)(FormFieldList);

export default FieldContainer