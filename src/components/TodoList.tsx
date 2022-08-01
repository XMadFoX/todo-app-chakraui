import { Button, Flex, List, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import TodoItem from './TodoItem';

export default function TodoList() {
	const [todos] = useRecoilState(todosState);

	return (
		<List backgroundColor='background' rounded='6px'>
			{todos.map((todo, index) => (
				<TodoItem todo={todo} key={index} />
			))}
		</List>
	);
}
