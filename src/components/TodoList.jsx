/* eslint-disable react/prop-types */

import Todo from './Todo';
function TodoList({ themeTodos, allTodos, setTodos }) {
	function handleChecked(todo) {
		todo.checked = !todo.checked;
		setTodos([...allTodos]);
	}

	function handleDelete(todo) {
		const index = allTodos.indexOf(todo);

		// garder les elements avant l'index : 0, 1 2, ... index -1
		const firstPart = allTodos.slice(0, index);
		// garder les élements après l'index : index +1, index +2, ... array.length -1
		const secondPart = allTodos.slice(index + 1);

		setTodos([...firstPart, ...secondPart]);
	}

	return (
		<>
			<div className='todolist'>
				{themeTodos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							handleChecked={handleChecked}
							handleDelete={handleDelete}
						/>
					);
				})}
			</div>
		</>
	);
}

export default TodoList;
