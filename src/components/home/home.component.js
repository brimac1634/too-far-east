import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import MenuButton from '../menu-button/menu-button.component';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<div className='menu-button-header'>
			<div className='menu-button'>
				<MenuButton inverted />
			</div>
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