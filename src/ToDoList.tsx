import { useForm } from "react-hook-form";

interface IForm {
	toDo: string;
}

function ToDoList() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<IForm>();

	const handleValid = (data: IForm) => {
		console.log("Added a To Do:", data.toDo);
		setValue("toDo", "");
	};

	console.log(watch(), errors);

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
		</>
	);
}

export default ToDoList;
