import React from 'react';

const Radio = ({title, name, values, defaultChecked, handleChange, handleBlur}) => {
	return (
		<div className="container">
			<label className="title">{title}</label>

			{values.map((value, i) => {
				let checked = (value === defaultChecked);
				return (
				<div key={i}>
					<input name={name}
								type="radio"
								value={value}
								onBlur={handleBlur}
								onChange={handleChange}
								defaultChecked={checked} />
								{value}
				</div>
				)
			})}
		</div>
	)
}

export default Radio