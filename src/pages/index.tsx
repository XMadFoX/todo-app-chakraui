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
		</Box>
	</Box>
);

export default Index;
