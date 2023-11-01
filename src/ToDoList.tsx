import { useState } from "react";

function ToDoList() {
	const [toDo, setToDo] = useState("");
	const [toDoError, setToDoError] = useState("");

	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setToDoError("");
		setToDo(value);
	};

	const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (toDo.length < 2) {
			return setToDoError("it should be longer");
		}
		console.log("submit");
		setToDo("");
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={toDo} onChange={onChange} placeholder="Write a to do" />
				{toDoError !== "" ? toDoError : null}
				<button>Add</button>
			</form>
		</>
	);
}

export default ToDoList;
