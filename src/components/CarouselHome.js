import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import slide1 from '../images/slide1.png';
import '../App.css';

export default class CarouselHome extends Component {
	render() {
		return <Image src={slide1} alt='image1' className='carousel-home' />;
	}
}
