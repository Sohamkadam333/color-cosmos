import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './styles/app.css';
import ColorsPage from './pages/ColorsPage';
import PalletsPage from './pages/PalletsPage';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/explorecolors' element={<ColorsPage />} />

					<Route path='/explorepallets' element={<PalletsPage />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
