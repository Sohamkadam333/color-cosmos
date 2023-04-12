import React, { useState, useEffect } from 'react';
import '../styles/colorsPage.css';
import { colorsData } from '../data/hello6.js';
import Color from '../components/Color.jsx';
const ColorsPage = () => {
	const [colors, setColors] = useState([]);
	useEffect(() => {
		setColors(colorsData);
		console.log(colorsData);
	});
	return (
		<div className='colors-page-container'>
			{colors.length > 0 ? (
				colors.map((color) => {
					return <Color key={color.id} color={color.color} />;
				})
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default ColorsPage;
