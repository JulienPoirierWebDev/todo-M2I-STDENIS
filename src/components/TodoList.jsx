import { useState } from 'react';
function TodoList() {
	const [todos, setTodos] = useState([]);

	return (
		<>
			<div>
				<p>TodoList</p>
				{todos.map((todo) => {
					return <p key={1}>Todo</p>;
				})}
			</div>
		</>
	);
}

export default TodoList;
