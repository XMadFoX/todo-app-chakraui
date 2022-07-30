import { List } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import TodoItem from './TodoItem';

export default function TodoList() {
	const [todos] = useRecoilState(todosState);

	return (
		<List>
			{todos.map((todo, index) => (
				<TodoItem todo={todo} key={index} />
			))}
		</List>
	);
}
