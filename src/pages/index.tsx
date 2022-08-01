import { Box } from '@chakra-ui/react';
import CreateTodo from '../components/CreateTodo';
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
		<Box zIndex={1}>
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
	</Box>
);

export default Index;
