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
			{...itemAnimations}
			value={todo}
			id={todo.id}
			data-group
			onDragStart={() => setPreventClick(true)}
			onDragEnd={() => setTimeout(() => setPreventClick(false), 10)}
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
				{...closeButtonStyle}
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

const closeButtonStyle = {
	opacity: 0,
	_groupHover: { opacity: 1 },
	_groupFocus: { opacity: 1 },
	_focus: { opacity: 1 },
	marginLeft: 'auto',
};

const itemAnimations = {
	initial: { opacity: 0, scale: 0.9 },
	animate: {
		opacity: 1,
		scale: 1,
		background: '',
		border: '',
		borderRadius: '',
	},
	exit: { opacity: 0, scale: 0.9 },
	whileDrag: {
		scale: 1.02,
		z: 5,
		background: 'var(--chakra-colors-background)',
		border: '1px solid var(--chakra-colors-text)',
		borderRadius: '6px',
	},
	transition: { duration: 0.2 },
};
