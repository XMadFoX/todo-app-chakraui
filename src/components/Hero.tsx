import { Box, Container, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
	const { colorMode } = useColorMode();

	return (
		<Flex mb={'2rem'}>
			<Box
				height={['200px', '300px']}
				backgroundImage={[
					`url(/covers/bg-mobile-${colorMode}.jpg)`,
					`url(/covers/bg-desktop-${colorMode}.jpg)`,
				]}
				style={{
					width: '100vw',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'none',
					position: 'absolute',
					zIndex: '-1',
					left: '0',
					top: '0',
				}}
			/>
			<Heading
				marginRight='auto'
				letterSpacing={'1rem'}
				textTransform='uppercase'>
				Todo
			</Heading>
			<ThemeToggle />
		</Flex>
	);
}
