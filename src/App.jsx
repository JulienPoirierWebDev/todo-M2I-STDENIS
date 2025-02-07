import { useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Theme from './components/Theme';

function App() {
	document.title = 'Todo app :)';

	const formRef = useRef(null);

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
		{
			id: 4,
			text: 'Chercher une mission',
			checked: false,
			priority: 'Faible',
			theme: 'Professionnel',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 5,
			text: 'Chercher un local',
			checked: false,
			priority: 'Critique',
			theme: 'Professionnel',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 6,
			text: 'Prendre un café',
			checked: false,
			priority: 'Moyen',
			theme: 'Professionnel',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 7,
			text: 'Faire la vidange',
			checked: false,
			priority: 'Haute',
			theme: 'Voiture',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
		{
			id: 8,
			text: "Faire de l'essence",
			checked: false,
			priority: 'Faible',
			theme: 'Voiture',
			sousTaches: [
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
				{ checked: false, text: 'sous tache' },
			],
		},
	]);

	const maisonTodos = todos.filter((oneTodo) => {
		if (oneTodo.theme === 'Maison') {
			return oneTodo;
		}
	});

	const voitureTodos = todos.filter((oneTodo) => {
		if (oneTodo.theme === 'Voiture') {
			return oneTodo;
		}
	});

	const professionnelTodos = todos.filter((oneTodo) => {
		if (oneTodo.theme === 'Professionnel') {
			return oneTodo;
		}
	});

	return (
		<>
			<Header />

			<form
				ref={formRef}
				action=''
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(formRef.current);
					const priority = formData.get('priority');
					const theme = formData.get('theme');
					const text = formData.get('text');

					const newTodo = {
						id: Date.now(),
						text: text,
						checked: false,
						priority: priority,
						theme: theme,
						sousTaches: [],
					};

					setTodos([...todos, newTodo]);

					formRef.current.reset();
				}}
			>
				<label htmlFor='text'>Contenu de la todo</label>
				<input type='text' name='text' id='text' />
				<fieldset>
					<legend>Selectionnez une priorité</legend>

					<input
						type='radio'
						name='priority'
						id='faible'
						value='Faible'
					/>
					<label htmlFor='faible'>Priorité faible</label>
					<input
						type='radio'
						name='priority'
						id='moyen'
						value='Moyen'
					/>
					<label htmlFor='moyen'>Priorité moyenne</label>

					<input
						type='radio'
						name='priority'
						id='haute'
						value='Haute'
					/>
					<label htmlFor='haute'>Priorité haute</label>

					<input
						type='radio'
						name='priority'
						id='critique'
						value='Critique'
					/>
					<label htmlFor='critique'>Priorité critique</label>
				</fieldset>
				<fieldset>
					<legend>Selectionnez un thème de TODO</legend>

					<input
						type='radio'
						name='theme'
						id='maison'
						value='Maison'
					/>
					<label htmlFor='maison'>Maison</label>
					<input
						type='radio'
						name='theme'
						id='voiture'
						value='Voiture'
					/>
					<label htmlFor='voiture'>Voiture</label>
					<input
						type='radio'
						name='theme'
						id='professionnel'
						value='Professionnel'
					/>
					<label htmlFor='professionnel'>Professionnel</label>
				</fieldset>

				<button type='submit'>Ajouter une TODO</button>
			</form>

			{maisonTodos.length > 0 ? (
				<Theme
					themeTodos={maisonTodos}
					allTodos={todos}
					setTodos={setTodos}
				/>
			) : null}
			{voitureTodos.length > 0 ? (
				<Theme
					themeTodos={voitureTodos}
					allTodos={todos}
					setTodos={setTodos}
				/>
			) : null}
			{professionnelTodos.length > 0 ? (
				<Theme
					themeTodos={professionnelTodos}
					allTodos={todos}
					setTodos={setTodos}
				/>
			) : null}

			<Footer />
		</>
	);
}

export default App;
