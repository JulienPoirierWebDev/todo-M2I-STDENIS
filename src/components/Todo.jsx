function Todo() {
	const detail = {
		text: 'Youhou',
		checked: true,
		priority: 'Critique',
		theme: 'Maison',
        sousTaches : [{ checked :false , text : "sous tache"},
                      {checked :false , text : "sous tache"},
                      checked :false , text : "sous tache"


        ]
	};

	return (
		<>
			<div>
				<p>Todo</p>
				<div>{detail.text}</div>
			</div>
		</>
	);
}

export default Todo;
