import { connect } from 'react-redux';
import { createField } from '../actions/create-field-act';
import AddField from '../components/add-field';

const AddFieldContainer = connect(
	// mapstatetoprops
	null,
	// mapdispatchtoprops
	(dispatch) => {
		return {
			onClick: () => dispatch(createField("default"))
		}
	}
)(AddField);

export default AddFieldContainer