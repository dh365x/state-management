import { useRecoilValue } from "recoil";
import { toDoState } from "../recoil/atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
	const toDos = useRecoilValue(toDoState);
	console.log(toDos);
	return (
		<>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<ul>
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</>
	);
}

export default ToDoList;
