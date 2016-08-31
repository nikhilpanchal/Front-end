import React from 'react';
import FieldContainer from '../containers/FieldsContainer';
import AddFieldContainer from '../containers/add-field-container';


const App = ({children}) => {
	return (
		<div>
			<FieldContainer />
			<AddFieldContainer />
		</div>
	)
}

export default App