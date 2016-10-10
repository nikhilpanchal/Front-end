"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

import { TextEvent, SelectEvent } from './event-components';
// We don't need a change blur for radio input since the change is a single click.
// The same with checkbox.
import Radio from './radio-input/radio';
import TypeAhead from './typeahead/typeahead';


class App extends React.Component {

	render() {
		return (
			<div>
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
								defaultChecked="Non-Pocket" 
								handleChange={(e) => console.log(`Pocket Status: ${e.target.value}`)}/>
				</div>

				
				<TypeAhead />
			</div>
			
		)
	}
};

export default App

