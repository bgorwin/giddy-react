import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<h3 id='nav-logo'>Giddy</h3>
				<ul className='nav-links'>
					<li>
						<a href='/'>Product</a>
					</li>
					<li>
						<a href='/'>Testimonials</a>
					</li>
					<li>
						<a href='/'>Videos</a>
					</li>
					<li>
						<a href='/'>Blog</a>
					</li>
					<li>
						<a href='/'>About</a>
					</li>
					<li>
						<a href='/'>FAQ</a>
					</li>
					<li>
						<a href='/'>
							<FontAwesomeIcon icon='user' />
						</a>
					</li>
					<li>
						<a href='/'>
							<FontAwesomeIcon icon='shopping-cart' />
						</a>
					</li>
					<li>
						<a href='/'>
							<FontAwesomeIcon icon='square' className='fa-lg' />
						</a>
					</li>
					<li>
						<a href='/' id='nav-buy-now'>
							Buy Now
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
