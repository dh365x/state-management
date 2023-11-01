import { useState } from "react";

function ToDoList() {
	const [toDo, setToDo] = useState("");

	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setToDo(value);
	};

	const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(toDo);
		setToDo("");
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={toDo} onChange={onChange} placeholder="Write a to do" />
				<button>Add</button>
			</form>
		</>
	);
}

export default ToDoList;
