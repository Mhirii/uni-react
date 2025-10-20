import React from 'react';

function FormulaireNonControle() {
	const nomRef = React.useRef();
	const emailRef = React.useRef();
	const handleSubmit = (event) => {
		event.preventDefault();
		const nom = nomRef.current.value;
		const email = emailRef.current.value;
		console.log('Formulaire soumis :', { nom, email });
		alert('Formulaire soumis avec succès !');
	}
	return (
		<div>
			<h1>Formulaire Non Controle</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nom :</label>
					<input
						type="text"
						name="nom"
						ref={nomRef}
						placeholder="Votre nom" />
				</div>
				<div>
					<label>Email :</label>
					<input
						type="email"
						name="email"
						ref={emailRef}
						placeholder="Votre email" />
				</div>
				<button type="submit">Soumettre</button>
			</form>
		</div>
	);
}
export default FormulaireNonControle;

