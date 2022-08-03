import { CheckIcon } from '@chakra-ui/icons';
import { Box, Center, useCheckbox } from '@chakra-ui/react';
import React from 'react';

export default function Checkbox(props) {
	const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
		useCheckbox(props);

	return (
		<Box
			as='label'
			{...getLabelProps()}
			display='flex'
			flexDirection='row'
			alignItems='center'
			gridColumnGap={2}
			tabIndex={0}
			onKeyDown={(e: any) => {
				if (e.key !== ' ') return;
				e.preventDefault();
				props.onChange(e);
			}}
			px={4}
			py={3}
			cursor='pointer'
			{...htmlProps}>
			<input {...getInputProps()} hidden />
			<Center
				rounded='full'
				bgGradient='linear(135deg, blue.200, purple.300)'
				w={6}
				h={6}
				{...getCheckboxProps()}>
				<Center
					bgColor={state.isChecked ? 'transparent' : 'background'}
					transitionDuration='0.3s'
					w={5}
					h={5}
					rounded='full'>
					<CheckIcon
						boxSize={state.isChecked ? 2.5 : 0}
						transitionDuration='0.3s'
						color='white'
					/>
				</Center>
			</Center>
			{props.children}
		</Box>
	);
}
