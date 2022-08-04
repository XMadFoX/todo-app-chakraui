import { atom } from 'recoil';
import { Filter, Todo } from './types';

const todosState = atom<Todo[]>({
	key: 'todos',
	default: [],
});

const filterState = atom<Filter>({
	key: 'filter',
	default: 'all',
});

export { todosState, filterState };
