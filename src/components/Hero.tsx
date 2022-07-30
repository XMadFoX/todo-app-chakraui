import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
	return (
		<Flex>
			<Heading marginRight='auto'>Todo</Heading>
			<ThemeToggle />
		</Flex>
	);
}
