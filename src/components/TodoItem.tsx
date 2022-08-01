import React from 'react';
import { CloseButton, ListItem, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import Checkbox from './Checkbox';

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
		<ListItem display='flex' alignItems='center' padding='0.5rem'>
			<Checkbox
				maxWidth='100%'
				overflowX='auto'
				isChecked={todo.done}
				onChange={() => toggleDone(todo.id, !todo.done)}>
				<Text
					decoration={todo.done && 'line-through'}
					overflowWrap='break-word'
					color={todo.done && 'GrayText'}>
					{todo.text}
				</Text>
			</Checkbox>
			<CloseButton
				aria-label='Remove task'
				onClick={() => removeTodo(todo.id)}
				marginLeft='auto'
			/>
		</ListItem>
	);
}
