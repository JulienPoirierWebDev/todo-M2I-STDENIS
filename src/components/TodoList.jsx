import { useState } from 'react';

import Todo from './Todo';
function TodoList() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'Faire la vaisselle',
			checked: false,
			priority: 'Critique',
			theme: 'Maison',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 2,
			text: 'Plier le linge',
			checked: true,
			priority: 'Critique',
			theme: 'Maison',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 3,
			text: 'Faire la sieste',
			checked: false,
			priority: 'Moyenne',
			theme: 'Maison',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
	]);

	function handleChecked(todo) {
		todo.checked = !todo.checked;
		setTodos([...todos]);
	}

	return (
		<>
			<div>
				<p>TodoList</p>
				<div>
					{todos.map((todo) => {
						return (
							<Todo
								key={todo.id}
								todo={todo}
								handleChecked={handleChecked}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default TodoList;
