"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

import { TextEvent, SelectEvent } from './event-components';
import Radio from './radio-input/radio';
import Select from './select-input/select';


class App extends React.Component {

	render() {
		return (
			<div className="root">
				<h1>Component Store</h1>
				<SelectEvent title="Action" 
					changeBlur={(e) => console.log(`Action change ${e.target.value}`)}
					values={["Buy","Sell","Short Sell"]}
					selected="Short Sell" />
				<TextEvent title="Quantity" 
							changeBlur={(e) =>  console.log(`Quantity: ${e.target.value}`)} 
							value={100}
							type="number"
							/>
				<TextEvent title="Symbol" 
							handleChange={(e) => console.log(`Symbol: ${e.target.value}`)}
							value={"GOOG"}
							type="text"/>
				<SelectEvent title="Price Type" 
							values={["Market", "Limit", "Stop", "Stop Limit"]}
							selected="Limit" 
							changeBlur={(e) => console.log(`Price change blurred: ${e.target.value}`)} />
				<TextEvent title="Price" 
							changeBlur={(e) => console.log(`Price: ${e.target.value}`)}
							type="number" />
				<TextEvent title="Limit Price"
							changeBlur={(e) => console.log()}
							type="number" />
				<Radio title="Pocket"
							name="pocket"
							values={["Pocket", "Non-Pocket"]}
							defaultChecked="Non-Pocket" />
			</div>
		)
	}
};

export default App

