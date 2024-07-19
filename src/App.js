import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import NetAssets from './components/netAssets/netAssets';
import './App.css';


function App() {
	return (
		<div className='ask-ai-app'>
			<BrowserRouter>
				<Container>
					<Header />
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/net-assets" element={ <NetAssets /> } />
					</Routes>
					<Footer />
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;