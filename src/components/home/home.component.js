import React from 'react';
import Fade from 'react-reveal/Fade';

import CustomButton from '../custom-button/custom-button.component';
import MenuButton from '../menu-button/menu-button.component';
import { ReactComponent as Logo } from '../../assets/TFE_white_logo.svg'

// import homeImage from '../../assets/TFE_desktop_homepage_image.jpg'
import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<div className='hero' />
		<div className='menu-button-header'>
			<MenuButton inverted />
		</div>
		<Fade>
			<div className='center'>
				<div className='logo-container'>
					<Logo />
				</div>
				<CustomButton href='https://toofareastbarber.resurva.com/book'>
					Book Now
				</CustomButton>
			</div>
		</Fade>
		<div className='scroll-message'>
			<span>scroll down for more</span>
		</div>
	</div>
)

export default Home;