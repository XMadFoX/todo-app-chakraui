import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { AnimatePresence, Reorder } from 'framer-motion';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { defaultTodos } from '../data';
import { filterState, todosState } from '../state';
import Filter from './Filter';
import TodoItem from './TodoItem';

export default function TodoList() {
	const [todos, setTodos] = useRecoilState(todosState);
	const [filter] = useRecoilState(filterState);

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.done));
	};

	useEffect(() => {
		let localTodos = localStorage.getItem('todos');
		if (!localTodos) setTodos(defaultTodos);
		else setTodos(JSON.parse(localTodos));
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<Box backgroundColor='background' rounded='6px' shadow='2xl'>
			<Reorder.Group axis='y' onReorder={setTodos} values={todos}>
				<AnimatePresence>
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
						.map((todo) => (
							<TodoItem todo={todo} key={todo.id} />
						))}
				</AnimatePresence>
			</Reorder.Group>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				px='1.5rem'
				py={2}>
				<Text fontWeight='thin' opacity='0.25'>
					{todos.filter((todo) => !todo.done).length} items left
				</Text>
				<Box display={['none', 'block']}>
					<Filter />
				</Box>
				<Button
					onClick={clearCompleted}
					variant='unstyled'
					fontWeight='normal'
					opacity='0.25'
					_hover={{ opacity: '1' }}>
					Clear Completed
				</Button>
			</Flex>
		</Box>
	);
}
