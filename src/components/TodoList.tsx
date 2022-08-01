import { Box, Button, Flex, List, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState, todosState } from '../state';
import Filter from './Filter';
import TodoItem from './TodoItem';

export default function TodoList() {
	const [todos, setTodos] = useRecoilState(todosState);
	const [filter] = useRecoilState(filterState);

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.done));
	};

	return (
		<List backgroundColor='background' rounded='6px'>
			{todos
				.filter((item) => {
					switch (filter) {
						case 'active':
							return !item.done;
						case 'completed':
							return item.done;
						default:
							return true;
					}
				})
				.map((todo, index) => (
					<TodoItem todo={todo} key={index} />
				))}
			<Flex alignItems='center' px='1.5rem' opacity='0.5'>
				<Text fontWeight='thin'>
					{todos.filter((todo) => !todo.done).length} items left
				</Text>
				<Box mx={'2rem'} display={['none', 'block']}>
					<Filter />
				</Box>
				<Button
					onClick={clearCompleted}
					variant='unstyled'
					fontWeight='normal'
					marginLeft='auto'>
					Clear completed
				</Button>
			</Flex>
		</List>
	);
}
