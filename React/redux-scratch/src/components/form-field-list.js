import React from 'react';
import FormField from './form-field';

const FormFieldList = ({labels}) => {
	return (
		<div>
			{labels.map((field, index) => {
				return <FormField key={index} label={field.text} />
			})}
		</div>
	)
}
export default FormFieldList