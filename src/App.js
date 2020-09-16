import React from 'react';
import './components/FontAwesomeIcons/index';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselHome from './components/CarouselHome';

function App() {
	return (
		<Router className='App'>
			<Nav />
			<CarouselHome />
		</Router>
	);
}

export default App;
