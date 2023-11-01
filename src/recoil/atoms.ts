import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
	"TO_DO" = "TO_DO",
	"DOING" = "DOING",
	"DONE" = "DONE",
}

export interface ICustomCategory {
	id: number;
	title: string;
}

export const customCategoryState = atom<ICustomCategory[]>({
	key: "customCategory",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export interface IToDo {
	id: number;
	text: string;
	category: Categories;
}

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
	key: "category",
	default: Categories.TO_DO,
	effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
