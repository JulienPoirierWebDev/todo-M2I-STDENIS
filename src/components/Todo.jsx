/* eslint-disable react/prop-types */
//Que fait ce composant

import transformInKebabCase from '../utils/transformInKebabCase';

//affiche la tache et si elle est checked
function Todo({ todo, handleChecked, handleDelete }) {
	if (!todo) {
		return null;
	}

 	return (
		<div className={'todo ' + todo.priority.toLowerCase()}>
			<input
				type='checkbox'
				checked={todo.checked}
				onChange={() => {
					handleChecked(todo);
				}}
				name={transformInKebabCase(todo.text)}
				id={transformInKebabCase(todo.text)}
			/>
			<label htmlFor={transformInKebabCase(todo.text)}>{todo.text}</label>
			<button
				onClick={() => {
					handleDelete(todo);
				}}
			>
				Supprimer
			</button>
		</div>
	);
}

export default Todo;
