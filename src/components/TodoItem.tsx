import React from 'react';
import { Checkbox, CloseButton, ListItem, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';

export default function TodoItem({ todo }) {
	const [todos, setTodos] = useRecoilState(todosState);

	const toggleDone = (id: string, done: boolean) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, done };
				}
				return todo;
			})
		);
	};

	const removeTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<ListItem bgColor='containerbg' display='flex' alignItems='center'>
			<Checkbox
				defaultChecked={todo.done}
				onChange={() => toggleDone(todo.id, !todo.done)}
				rounded='full'
				marginRight='1rem'
			/>
			<Text alignSelf='center'>{todo.text}</Text>
			<CloseButton
				aria-label='Remove task'
				onClick={() => removeTodo(todo.id)}
				marginLeft='auto'
			/>
		</ListItem>
	);
}
