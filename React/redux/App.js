import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux';


/** Action Creators **/

let idCounter = 0;
const addTodoActionCreator = (text) => {
	return {
		type: 'ADD_TODO',
		text,
		id: idCounter++
	}
}
const setVisibilityFilterActionCreator = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}
const toggleTodoActionCreator = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}


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

/**
 * Function that takes in the state object and returns props that are
 * based on it. This is used by container components that pass state
 * based attributes as props to its child presentational components
 */
const stateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibility)
	};
};

/**
 * function that takes in the store dispatch function and returns back
 * the props that use this dispatch function to dispatch actions.
 */
const dispatchToProps = (dispatch) => {
	return {
		onTodoClick: 
			(id) => {
				dispatch(toggleTodoActionCreator(id));
			}
		
	};
};

/**
 * Now we no longer need to write the container component by hand. Instead
 * we use connect to generate it for us.
 * Note however that to use connect we ned the store to be passed in 
 * either as a prop or via the context
 */
const VisibleTodos = connect(
	stateToProps,
	dispatchToProps
)(TodoListComp);


let AddTodoComp = ({
	dispatch
}) => {
	let storeDispatch = () => {
		dispatch(addTodoActionCreator(input.value));

		input.value = '';
	};

	let input;
	return (
		<div>
			<input ref={node => {
				input = node;
			}} onKeyUp={(e) => {
				if(e.keyCode === 13) {
					storeDispatch();
				}
			}}/>
			<button onClick={(e) => {
				storeDispatch();
			}}>
				Add Todo
			</button>
		</div>
	)
};

// by default connect will pass just the dispatch function, so writing it below
// is a shortcut for writing it this way
// connect(null, (dispatch) => {
	// return { dispatch };
// })(AddTodoComp);
// We can do this because AddTodoComp doesnt need any props based on the state,
// and it just needs the store for its dispatch function so we can just pass 
// back a prop with the dispatch function itself. However given that this is a
// common scenario, react-redux has made the connect() function to pass just 
// the dispatch function as a default if no params are provided. So can we
// end up calling connect just plain with no args as below.
AddTodoComp = connect()(AddTodoComp);


const Link = ({
	active,
	onClick,
	children,
}) => {
	if(active) {
		return <span>{children}</span>
	}

	return (
		<a href="#" onClick={(e) => {
			e.preventDefault();
			onClick();
		}}>
			{children}
		</a>
	)
};

/**
 * This is the container component for the Links. Here we pass down
 * the state based props as well as dispatch based function props.
 * In both cases, we need the incoming props, which we refer to 
 * using the second arguments to the stateToProps and dispatchToProps
 * functions.
 */
const FilterLink = connect(
	(state, ownProps) => {
		// Return state based props.
		return {
			active: (ownProps.filter === state.visibility)
		}
	},
	(dispatch, ownProps) => {
		// Return dispatch based props.
		return {
			onClick: () => {
				dispatch(setVisibilityFilterActionCreator(ownProps.filter));
			}
		}
	}
)(Link);


const FooterComp = () => {
	return (
		<p>
			Show:
			<FilterLink filter="SHOW_ALL">All</FilterLink>
			{' '}
			<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
			{' '}
			<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
		</p>
	)
}


const App = () => (
	<div>
		<AddTodoComp />
		<VisibleTodos />
		
		<FooterComp />
	</div>
);


export default App;

// Render the component. It no longer needs state values passed in as props.
// This is because its components are separated into container and presentational
// components and will dip into the redux store for state as and when they need.
ReactDOM.render(
	<Provider store={ createStore(reducers) }>
		<App />
	</Provider>,	 
	document.getElementById('app')
);

