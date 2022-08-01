import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { FormControl, IconButton, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import Checkbox from './Checkbox';

const defaultInputValue = {
	text: '',
	done: false,
};

export default function CreateTodo() {
	const [todos, setTodos] = useRecoilState(todosState);
	const [input, setInput] = useState(defaultInputValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, { id: nanoid(), text: input.text, done: input.done }]);
		setInput(defaultInputValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl
				display='flex'
				backgroundColor='background'
				padding='0.5rem'
				mb={'1.5rem'}
				rounded='6px'>
				<Checkbox
					pr={2}
					aria-label='Mark task as done'
					isChecked={input.done}
					onChange={() => setInput({ ...input, done: !input.done })}
				/>
				<Input
					variant='unstyled'
					placeholder='Create a new todo...'
					isRequired
					value={input.text}
					style={{ caretColor: '#5d77b4' }}
					onChange={(e) => setInput({ ...input, text: e.target.value })}
				/>
			</FormControl>
		</form>
	);
}
