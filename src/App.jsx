import Footer from './components/Footer';
import Header from './components/Header';
import Theme from './components/Theme';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Collapse from './components/Collapse';

function App() {
	return (
		<>
			<Header />
			<Theme />
			<Todo />
      <TodoList/>
      <Collapse/>
			<Footer />
		</>
	);
}

export default App;
