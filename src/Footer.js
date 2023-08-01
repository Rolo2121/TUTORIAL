import React from 'react';

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer>
			<p>
				{length} list {length === 1 ? 'item' : 'items'}
			</p>
			<br />
			<p>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
