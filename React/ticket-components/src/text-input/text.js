import React from 'react';
import './text.less';

export default Text = ({title}) => {
	return (
		<div className="container">
			<label className="title">{title}</label>
			<input className="input" type="text" />
		</div>
	)
}