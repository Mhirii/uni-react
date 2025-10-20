
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);



	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				setData(response.data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Erreur :', error);
				setLoading(false);
			});
	}, []);



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


