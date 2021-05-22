const AddItem = ({ item, todos, handleClick, handleChange }) => {
	return (
		<form className="my-3 m-auto row gap-2">
			<input
				type="text"
				className="form-control col"
				value={item}
				onChange={handleChange}
			/>
			<button
				className="btn btn-success col-2 my-auto"
				onClick={(e) => handleClick(e, item)}
			>
				Add #{todos.length + 1}
			</button>
		</form>
	);
};

export default AddItem;
