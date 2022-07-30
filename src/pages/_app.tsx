import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
