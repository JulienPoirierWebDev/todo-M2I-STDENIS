/* eslint-disable react/prop-types */
import arrow from '../assets/arrow.svg';

function Collapse({ isOpen, setIsOpen, label }) {

	const actualClassName = isOpen ? 'arrow arrow-close' : 'arrow arrow-open';
	const ariaLabel = isOpen ? 'close-XXXX' : 'open-XXXX';

	return (
		<div
			className='collapse'
			onClick={() => {
				if (!isOpen) {
					setIsOpen(true);
				} else {
					setIsOpen(false);
				}
				// faire en sorte que la className change et que le aria-label change.
				// Faire du css pour que arrow-close soit dans l'autre sens (vers le haut)
				// Faire la même chose lorsque le bouton
				// pour ouvrir les todos est cliqué (c'est le même bouton, il y aura un if/else ...!)
			}}
		>
			<img
				className={actualClassName}
				src={arrow}
				alt=''
				aria-label={ariaLabel}
			/>
			<h2>{label}</h2>
		</div>
	);
}

export default Collapse;
