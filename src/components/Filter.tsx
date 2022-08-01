import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../state';

export default function Filter() {
	const [filter, setFilter] = useRecoilState(filterState);

	const options = ['all', 'active', 'completed'];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'filter',
		defaultValue: 'all',
		onChange: (value: 'all' | 'active' | 'completed') => setFilter(value),
	});

	const group = getRootProps();

	return (
		<HStack display='flex' justifyContent='space-evenly' {...group}>
			{options.map((option) => {
				const radio = getRadioProps({ value: option });

				return (
					<Radio key={option} {...radio}>
						{option}
					</Radio>
				);
			})}
		</HStack>
	);
}

const Radio = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				cursor='pointer'
				boxShadow='md'
				_hover={{ color: 'text' }}
				_checked={{
					color: 'blue.500',
				}}
				_focus={{
					boxShadow: 'outline',
				}}>
				{`${props.children[0].toUpperCase()}${props.children.slice(1)}`}
			</Box>
		</Box>
	);
};