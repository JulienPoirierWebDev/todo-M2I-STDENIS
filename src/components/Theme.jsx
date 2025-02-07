/* eslint-disable react/prop-types */
import { useState } from 'react';
import Collapse from './Collapse';
import TodoList from './TodoList';

function Theme({ themeTodos, allTodos, setTodos }) {

	let [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Collapse
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				label={themeTodos[0].theme}
			/>
			{isOpen ? (
				<TodoList
					allTodos={allTodos}
					themeTodos={themeTodos}
					setTodos={setTodos}
				/>
			) : null}
		</>
	);
}

export default Theme;
