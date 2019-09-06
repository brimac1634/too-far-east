import React from 'react';

import Perspective from '../perspective/perspective.component';
import CustomButton from '../custom-button/custom-button.component';
import MenuButton from '../menu-button/menu-button.component';
import { ReactComponent as Logo } from '../../assets/TFE_white_logo.svg'

import homeImage from '../../assets/TFE_desktop_homepage_image.jpg'
import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<Perspective src={homeImage}/>
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