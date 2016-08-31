import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

import Text from './text-input/text';

class App extends React.Component {

	render() {
		return (
			<div className="root">
				<h1>Component Store</h1>
					<div className="field">
						<Text title="Quantity" handleChange={(e) => console.log(e.target.value)}/>
					</div>
					<div className="field">
						<Text title="Symbol" handleChange={(e) => console.log(`Symbol: ${e.target.value}`)}/>
					</div>	
				
			</div>
		)
	}
};

export default App