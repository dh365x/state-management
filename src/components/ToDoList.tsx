import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../recoil/atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);

	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};

	return (
		<>
			<h1>To Dos</h1>
			<hr />
			<h2>{category}</h2>
			<select value={category} onInput={onInput}>
				<option value={Categories.TO_DO}>To Do</option>
				<option value={Categories.DOING}>Doing</option>
				<option value={Categories.DONE}>Done</option>
			</select>
			<CreateToDo />
			{toDos?.map((toDo) => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</>
	);
}

export default ToDoList;
