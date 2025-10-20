import React from 'react';


function FormulaireControle() {
	const [formData, setFormData] = React.useState({
		nom: '',
		email: ''
	});
	const [erreur, setErreur] = React.useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
		//validation en temps réel
		if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
			setErreur('Adresse email invalide');
		} else {
			setErreur('');
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!erreur && formData.email) {
			console.log('Formulaire soumis :', formData);
			alert('Formulaire soumis avec succès !');
		}
		else {
			alert('Veuillez corriger les erreurs avant de soumettre.');
		}
	};

	return (
		<div>
			<h1>Formulaire  Controle</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nom :</label>
					<input
						type="text"
						name="nom"
						value={formData.nom}
						onChange={handleChange}
						placeholder="Votre nom" />
				</div>
				<div>
					<label>Email :</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Votre email" />
				</div>
				{erreur && <p style={{ color: 'red' }}>{erreur}</p>}
				<button type="submit" disabled={!formData.email || erreur}>Soumettre</button>
			</form>



		</div>
	);


}

export default FormulaireControle;




// !/\S+@\S+\.\S+/.test(value)


/\S+@\S+\.\S+/.test(value)


