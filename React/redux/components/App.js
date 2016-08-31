import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleFilterList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const App = () => (
	<div>
		<AddTodo />
		<VisibleFilterList />
		<Footer />
	</div>
);

export default App