import { Box, Button, Flex, List, Text } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
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
			<Reorder.Group axis='y' onReorder={setTodos} values={todos}>
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
			</Reorder.Group>
			<Flex alignItems='center' justifyContent='space-between' px='1.5rem'>
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
		</List>
	);
}
