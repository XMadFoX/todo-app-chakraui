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
		<ListItem
			display='flex'
			alignItems='center'
			padding='0.5rem'
			rounded='full'>
			<Checkbox
				isChecked={todo.done}
				onChange={() => toggleDone(todo.id, !todo.done)}
				rounded='full'
				marginRight='1rem'
				alignItems='center'>
				<Text
					decoration={todo.done && 'line-through'}
					color={todo.done && 'GrayText'}
					alignSelf='center'
					style={{}}>
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
