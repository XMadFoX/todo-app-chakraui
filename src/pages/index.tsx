import { Container } from '@chakra-ui/react';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';

const Index = () => (
	<Container>
		<Hero />
		<CreateTodo />
		<TodoList />
	</Container>
);

export default Index;
