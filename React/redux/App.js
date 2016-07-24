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
	switch(action.type) {
		case "SET_VISIBILITY_FILTER": {
			return action.filter;
		}
		default: {
			return state;
		}
	}
	return state;
}

const reducers = combineReducers({
	todos,
	visibility
});

const store = createStore(reducers);


/** Presentational Component **/
/**
 * Todo Component. Purely presentational. Contains no business logic.
 * All business logic passed from the outside.
 */
 // The functions are splitting out the incoming prop object keys using
 // object destructuring.
 // What is being passed in is the props object, but in the function, 
 // via destruring, we are only picking up the prop fields that we are
 // interested in.
const TodoComp = ({onClick, id, text, done}) => {
	return (
		<li key={id} onClick={onClick} style={{
			textDecoration: 
				done ? "line-through" : "none"
		}}>
			{text}
		</li>
	)
};

const TodoListComp = ({todos, onTodoClick}) => {
	return (
	<ul>
		{todos.map((todo) => 
			<TodoComp key={todo.id} {...todo} onClick ={ () => onTodoClick(todo.id) }/>
		)}
	</ul>
)}

const AddTodoComp = ({
	onAddTodo
}) => {
	let input;
	return (
		<div>
			<input ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				onAddTodo(input.value);
				input.value = '';
			}}>
				Add Todo
			</button>
		</div>
	)
};


const FilterLink = ({
	filter,
	currentFilter,
	children,
	onClick
}) => {
	if(currentFilter === filter) {
		return <span>{children}</span>
	}

	return (
		<a href="#" onClick={e => {
			e.preventDefault();
			onClick(filter);
		}}
		>
			{children}
		</a>
	)
}

const FooterComp = ({
	visibility,
	onFilterClick
}) => {
	return (
		<p>
			Show: 
			<FilterLink 
				filter="SHOW_ALL"
				currentFilter={visibility}
				onClick={onFilterClick}>All</FilterLink>
			{' '}
			<FilterLink 
				filter="SHOW_ACTIVE"
				currentFilter={visibility}
				onClick={onFilterClick}
				>Active</FilterLink>
			{' '}
			<FilterLink 
				filter="SHOW_COMPLETED"
				currentFilter={visibility}
				onClick={onFilterClick}>Completed</FilterLink>
		</p>
	)
}

const getVisibleTodos = (todos, filter) => {
	return todos.filter((todo) => {
		switch(filter) {
			case "SHOW_ALL": {
				return true;
			}
			case "SHOW_ACTIVE": {
				return !todo.done;
			}
			case "SHOW_COMPLETED": {
				return todo.done;
			}
			default: {
				return true;
			}
		}
	});
}


let idCounter = 0;

const App = ({todos, visibility}) => (
	<div>
		<AddTodoComp onAddTodo={
			(text) => {
				store.dispatch({
					type: 'ADD_TODO',
					text,
					id: idCounter++ 
				})
			}
		} />
		<TodoListComp todos={getVisibleTodos(todos, visibility)} onTodoClick={(id) => {
			store.dispatch({
				type: 'TOGGLE_TODO',
				id
			})
		}} />
		<FooterComp 
			visibility={visibility}
			onFilterClick={(filter) => {
				console.log("Dispatching for filter " + filter);
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				})
			}
		} />
	</div>
);


/**
 * Runner that will be invoked from the outside to render this component
 */
class RunApp {
	render() {
		ReactDOM.render(<App {...store.getState()}/>, document.getElementById('app'));
	}
};
var runner = new RunApp();

store.subscribe(runner.render);

export default runner;