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
		<HStack display='flex' justifyContent='space-evenly' spacing={'2em'} {...group}>
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
				opacity='0.25'
				_hover={{ opacity: '1' }}
				_checked={{
					fontWeight: 'bold',
					opacity: '1',
					color: 'blue.500',
					_dark: {
						color: 'blue.400',
					},
				}}
				transition='all 0.3s ease-in-out'
				_focus={{
					boxShadow: 'outline',
					opacity: '1',
				}}>
				{`${props.children[0].toUpperCase()}${props.children.slice(1)}`}
			</Box>
		</Box>
	);
};
