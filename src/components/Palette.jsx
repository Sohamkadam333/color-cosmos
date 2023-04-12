import React from 'react';
import '../styles/palette.css';
const Palette = (props) => {
	const { color1, color2, color3, color4, color5 } = props.palette;
	return (
		<dir className='palette-container'>
			<div className='color1' style={{ backgroundColor: color1 }}></div>
			<div className='color2' style={{ backgroundColor: color2 }}></div>
			<div className='color3' style={{ backgroundColor: color3 }}></div>
			<div className='color4' style={{ backgroundColor: color4 }}></div>
			<div className='color5' style={{ backgroundColor: color5 }}></div>
		</dir>
	);
};

export default Palette;
