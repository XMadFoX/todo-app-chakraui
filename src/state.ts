import { atom } from 'recoil';
import { Filter, Todo } from './types';

const todosState = atom<Todo[]>({
	key: 'todos',
	default: [
		{ id: '1', text: 'Learn Recoil', done: false },
		{ id: '2', text: 'Learn Chakra UI', done: false },
	],
});

const filterState = atom<Filter>({
	key: 'filter',
	default: 'all',
});

export { todosState, filterState };
