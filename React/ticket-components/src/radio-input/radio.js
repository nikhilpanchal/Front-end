import React from 'react';
import './radio.less';

const Radio = ({title, name, values, defaultChecked, handleChange, handleBlur}) => {
	return (
		<div className="container">
			<label className="radioTitle">{title}</label>

			{values.map((value, i) => {
				let checked = (value === defaultChecked);
				return (
					<div key={i}>
						<input name={name} 
								value={value}
								type="radio" 
								defaultChecked={checked}
								onChange={handleChange}
								onBlur={handleBlur}/>
						{value}
					</div>
				)
			})}
		</div>
	)
}

export default Radio