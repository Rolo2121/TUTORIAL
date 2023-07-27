import React from 'react';
import './index';

const Content = () => {
	const handleNameChange = () => {
		const names = ['Jake', 'John', 'Dave'];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};
	return (
		<main>
			<p>Hello {handleNameChange()} !</p>
		</main>
	);
};

export default Content;