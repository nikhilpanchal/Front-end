import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';


const todos = (state = [], action) => {
	switch(action.type) {
		case "ADD_TODO": {
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					done: false
				}
			];
		}
		case "TOGGLE_TODO": {
			return state.map((todo) => {
				if(todo.id === action.id) {
					return {
						id: todo.id,
						text: todo.text,
						done: !todo.done
					};
				}

				return todo;
			});
		}
	}

	return state;
};

const visibility = (state = "SHOW_ALL", action) => {
	return state;
}

const reducers = combineReducers({
	todos,
	visibility
});

const store = createStore(reducers);

let idCounter = 0;

class App extends React.Component {
	render() {
		return (
			<div>
				<input ref={node => {
					this.input = node;
				}} />
				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.input.value,
						id: idCounter++
					});
					this.input.value = "";
				}}>
					Add Todo
				</button>
				<ul>
					{this.props.todos.map(todo => 
						<li key={todo.id} onClick={() => {
							store.dispatch({
								type: 'TOGGLE_TODO',
								id: todo.id
							});
						}} style={{
							textDecoration: 
								todo.done ? "line-through" : "none"
						}}>
							{todo.text}
						</li>
					)}
				</ul>
			</div>
		)
	}
};

/**
 * Runner that will be invoked from the outside to render this component
 */
class RunApp {
	render() {
		ReactDOM.render(<App todos={store.getState().todos}/>, document.getElementById('app'));
	}
};
var runner = new RunApp();

store.subscribe(runner.render);

export default runner;