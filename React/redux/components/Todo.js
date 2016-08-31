import React, { PropTypes } from 'react';

// Stateless function component that takes in props and returns back
// the JSX to be rendered.
const Todo = ({onClick, completed, text}) => (
	<li 
		onClick={onClick}
		style={{
			textDecoration: completed ? "line-through" : "none" 
		}}
	>
		text
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo