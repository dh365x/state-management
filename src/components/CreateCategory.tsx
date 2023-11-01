import { useSetRecoilState } from "recoil";
import { customCategoryState } from "../recoil/atoms";
import { useForm } from "react-hook-form";

interface IForm {
	customCategory: string;
}

function CreateCategory() {
	const setCustomCategory = useSetRecoilState(customCategoryState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ customCategory }: IForm) => {
		setCustomCategory((prevCategories) => [
			{
				id: Date.now(),
				title: customCategory,
			},
			...prevCategories,
		]);
		setValue("customCategory", "");
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input {...register("customCategory")} placeholder="Add new category" />
				<button>Add</button>
			</form>
		</div>
	);
}

export default CreateCategory;
