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
			onClick={toggleColorMode}
			icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
		/>
	);
}
