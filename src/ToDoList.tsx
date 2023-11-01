import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
	toDo: string;
}

interface IToDo {
	id: number;
	text: string;
	category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const { register, handleSubmit, setValue } = useForm<IForm>();

	const handleValid = ({ toDo }: IForm) => {
		setToDos((prevToDos) => [
			{
				id: Date.now(),
				text: toDo,
				category: "TO_DO",
			},
			...prevToDos,
		]);
		setValue("toDo", "");
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register("toDo", {
						required: "Please write a to do",
					})}
					placeholder="Write a To Do"
				/>
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<li key={toDo.id}>{toDo.text}</li>
				))}
			</ul>
		</>
	);
}

export default ToDoList;
