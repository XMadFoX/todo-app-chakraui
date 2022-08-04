import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/system';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label={`toggle ${colorMode === 'light' ? 'dark' : 'light'} mode`}
			bgColor='transparent'
			_hover={{
				bgColor: 'rgba(255, 255, 255, 0.2)',
			}}
			color='white'
			fontSize='1.5rem'
			onClick={toggleColorMode}
			transition='all 0.2s ease-in-out'
			icon={
				colorMode === 'light' ? (
					<SunIcon _hover={{ transform: 'rotate(180deg)' }} transition='all 0.5s ease-in-out' />
				) : (
					<MoonIcon />
				)
			}
		/>
	);
}
