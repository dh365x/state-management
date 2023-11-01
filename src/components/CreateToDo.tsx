import { useSetRecoilState } from "recoil";
import { toDoState } from "../recoil/atoms";
import { useForm } from "react-hook-form";

interface IForm {
	toDo: string;
}

function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
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
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register("toDo", {
						required: "Please write a to do",
					})}
					placeholder="Write a To Do"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default CreateToDo;
