import { Box } from '@chakra-ui/react';
import CreateTodo from '../components/CreateTodo';
import Filter from '../components/Filter';
import Hero from '../components/Hero';
import TodoList from '../components/TodoList';

const Index = () => (
	<Box
		width='100%'
		height='100vh'
		bgColor='pagebg'
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'>
		<Box zIndex={1} width='100%' px='1.5rem' maxWidth='3xl'>
			<Hero />
			<CreateTodo />
			<TodoList />
			<Box
				mt='1.5rem'
				padding='1rem'
				bgColor='background'
				rounded='6px'
				display={['block', 'none']}>
				<Filter />
			</Box>
		</Box>
		<style jsx global>{`
			html {
				font-size: 18px;
			}
			@font-face {
				font-family: 'Josefin Sans';
				src: url(/fonts/JosefinSans-Regular.ttf) format('truetype');
			}
			@font-face {
				font-family: 'Josefin Sans';
				font-weight: 700;
				src: url(/fonts/JosefinSans-Bold.ttf) format('truetype');
			}
		`}</style>
	</Box>
);

export default Index;
