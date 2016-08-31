import React from 'react';
import ReactDOM from 'react-dom';
import './main.less';

import Text from './text-input/text';

ReactDOM.render(
	<div className="root">
		<h1>Component Store</h1>
			<div className="field">
				<Text title="Quantity" />
			</div>
			<div className="field">
				<Text title="Symbol" />
			</div>	
		
	</div>,
	document.getElementById('container')
);
