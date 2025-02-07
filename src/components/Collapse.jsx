import arrow from '../assets/arrow.svg';

function Collapse() {
	console.log(arrow);

	return (
		<>
			<img
				className='arrow-open'
				src={arrow}
				alt=''
				onClick={() => {
					// faire en sorte que la className change et que le aria-label change.
					// Faire du css pour que arrow-close soit dans l'autre sens (vers le haut)
					// Faire la même chose lorsque le bouton
					// pour ouvrir les todos est cliqué (c'est le même bouton, il y aura un if/else ...!)
				}}
				aria-label='close-XXXX'
			/>
			<p>Collapse</p>
			<div>CONTENU</div>
		</>
	);
}

export default Collapse;
