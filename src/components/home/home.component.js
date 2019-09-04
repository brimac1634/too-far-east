import React from 'react';

import Perspective from '../perspective/perspective.component';
import CustomButton from '../custom-button/custom-button.component';
import MenuButton from '../menu-button/menu-button.component';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import barber from '../../assets/barber.jpg'
import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<Perspective src={barber}/>
		<div className='menu-button-header'>
			<MenuButton inverted />
		</div>
		<div className='center'>
			<div className='logo-container'>
				<Logo />
			</div>
			<CustomButton>
				Book Now
			</CustomButton>
		</div>
		<div className='scroll-message'>
			<span className='bob'>&#8595;</span>
			<span>scroll down for more</span>
			<span className='bob'>&#8595;</span>
		</div>
	</div>
)

export default Home;