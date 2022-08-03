import { CloseButton, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import Checkbox from './Checkbox';
import { Reorder } from 'framer-motion';

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
		<Reorder.Item
			style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}
			value={todo}
			id={todo}>
			<Checkbox
				maxWidth='100%'
				overflowX='auto'
				isChecked={todo.done}
				onChange={(e) => {
					e.stopPropagation();
					toggleDone(todo.id, !todo.done);
				}}>
				<Text
					decoration={todo.done && 'line-through'}
					overflowWrap='break-word'
					transitionDuration='0.3s'
					color={todo.done && 'GrayText'}>
					{todo.text}
				</Text>
			</Checkbox>
			<CloseButton
				aria-label='Remove task'
				onClick={() => removeTodo(todo.id)}
				marginLeft='auto'
			/>
		</Reorder.Item>
	);
}
