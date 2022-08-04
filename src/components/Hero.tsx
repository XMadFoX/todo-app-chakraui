import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
	const { colorMode } = useColorMode();

	return (
		<Flex
			mb='2rem'
			height='90px'
			maxW='2xl'
			w='100%'
			px='1.5rem'
			justifyContent='space-between'
			alignItems='end'
			zIndex={1}
			mt={['1rem', '50px']}>
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
			<Heading letterSpacing={'1rem'} textTransform='uppercase' color='white'>
				Todo
			</Heading>
			<ThemeToggle />
		</Flex>
	);
}
