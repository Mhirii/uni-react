import React, { useState, useEffect } from 'react';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json()) // Convertit la réponse en JSON
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Erreur :', error);
				setLoading(false);
			});
	}, []); // Tableau vide : exécuté une seule fois au montage

	if (loading) {
		return <div>Chargement...</div>;
	}

	return (
		<div>
			<h1>Liste des Posts</h1>
			<ul>
				{data.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
