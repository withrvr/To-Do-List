const TodoList = ({ todos }) => {
	const todoList = todos.map((todo, index) => {
		const id = "todo" + index;
		return (
			<div
				className="alert alert-secondary alert-dismissible fade show"
				key={id}
			>
				<div>{todo}</div>
			</div>
		);
	});

	return (
		<div>
			{todoList.length > 0 ? (
				<div>{todoList}</div>
			) : (
				<h3>To Items added YET</h3>
			)}
		</div>
	);
};

export default TodoList;
