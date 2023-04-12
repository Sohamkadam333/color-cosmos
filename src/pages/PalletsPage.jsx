import React, { useState, useEffect } from 'react';
import Palette from '../components/Palette';
import { PalettesData } from '../data/Palettes.js';
import '../styles/palettesPage.css';
const PalletsPage = () => {
	const [palettes, setPalettes] = useState([]);
	useEffect(() => {
		setPalettes(PalettesData);
	}, []);
	return (
		<div className='palettes-page-main-container'>
			<h1>Explore Palettes</h1>
			<div className='palettes-page-container'>
				{palettes.map((palette) => {
					return <Palette key={palette.id} palette={palette} />;
				})}
			</div>
		</div>
	);
};

export default PalletsPage;
