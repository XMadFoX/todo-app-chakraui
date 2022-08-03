import { CloseButton, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import Checkbox from './Checkbox';
import { Reorder } from 'framer-motion';
import { useState } from 'react';

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

	const [preventClick, setPreventClick] = useState(false);

	return (
		<Reorder.Item
			style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}
			value={todo}
			id={todo.id}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			onDragStart={() => setPreventClick(true)}
			onDragEnd={() => setTimeout(() => setPreventClick(false), 10)}
			transition={{ duration: 0.3 }}
			className='todo-item'>
			<Checkbox
				maxWidth='100%'
				overflowX='auto'
				isChecked={todo.done}
				style={{ width: '100%' }}
				onChange={(e) => {
					e.stopPropagation();
					if (preventClick) return;
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
				onClick={() => !preventClick && removeTodo(todo.id)}
				marginLeft='auto'
			/>
			<style global jsx>{`
				.todo-item {
					border-bottom: 1px solid #e6e5ea;
				}
				[data-theme='dark'] .todo-item {
					border-bottom: 1px solid #37394e;
				}
			`}</style>
		</Reorder.Item>
	);
}
