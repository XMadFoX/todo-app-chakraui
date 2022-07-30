import { atom } from "recoil";

const todosState = atom({
	key: 'todos',
	default: [
		{ id: '1', text: 'Learn Recoil', done: false },
		{ id: '2', text: 'Learn Chakra UI', done: false },
	],
});

export { todosState };