import { useState } from "react";
import AddItem from "./AddItem";
import TodoList from "./TodoList";

const TodoApp = () => {
	// state
	const [todos, setTodos] = useState([]);
	const [item, setItem] = useState("");

	// handle
	const handleChange = (e) => {
		setItem(e.target.value);
	};
	const handleClick = (e, item) => {
		e.preventDefault();
		if (item) {
			setTodos([item, ...todos]);
			setItem("");
		}
	};

	return (
		<div className="container mb-5 text-center col-lg-8">
			<AddItem
				todos={todos}
				item={item}
				handleClick={handleClick}
				handleChange={handleChange}
			/>
			<TodoList todos={todos} />
		</div>
	);
};

export default TodoApp;
