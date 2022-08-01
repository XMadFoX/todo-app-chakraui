import { extendTheme } from '@chakra-ui/react';

const fonts = {
	body: `'Josefin Sans', 'Roboto', sans-serif`,
	mono: `'Menlo', monospace`,
};

const breakpoints = {
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
};

const theme = extendTheme({
	semanticTokens: {
		colors: {
			background: {
				default: '#fffffe',
				_dark: '#25273c',
			},
			pagebg: {
				default: '#f7f7f9',
				_dark: '#171723',
			},
			text: {
				default: '#16161D',
				_dark: '#ade3b8',
			},
			heroGradientStart: {
				default: '#7928CA',
				_dark: '#e3a7f9',
			},
			heroGradientEnd: {
				default: '#FF0080',
				_dark: '#fbec8f',
			},
		},
		radii: {
			button: '12px',
		},
	},
	colors: {
		black: '#16161D',
	},
	fonts,
	breakpoints,
});

export default theme;
