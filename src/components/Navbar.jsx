import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<h1>
				<Link to={'/'}>Color Cosmos</Link>
			</h1>
			<ul>
				<li>
					<Link to={'/exploreColors'}>Explore Colors</Link>
				</li>
				<li>
					<Link to={'/explorePallets'}>Explore Pallets</Link>
				</li>
				<li>
					<Link to={'/exploreGradients'}>Explore Gradients</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
