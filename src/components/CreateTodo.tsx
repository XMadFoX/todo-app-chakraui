import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Checkbox, FormControl, IconButton, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';
import { todosState } from '../state';

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
					marginRight='1rem'
					onChange={(e) => setInput({ ...input, done: e.target.checked })}
				/>
				<Input
					variant='unstyled'
					placeholder='New item'
					isRequired
					value={input.text}
					onChange={(e) => setInput({ ...input, text: e.target.value })}
				/>
				<IconButton
					aria-label='Add'
					icon={<AddIcon />}
					onClick={handleSubmit}
				/>
			</FormControl>
		</form>
	);
}
