import React from 'react';
import MediaQuery from 'react-responsive';

import ParallaxRow from '../../components/parallax-row/parallax-row.component';
import CustomButton from '../custom-button/custom-button.component';
import MenuButton from '../menu-button/menu-button.component';
import Enter from '../../components/enter/enter.component';

import { ReactComponent as Logo } from '../../assets/TFE_white_logo.svg'
import homeImage from '../../assets/TFE_desktop_homepage_image.jpg'
import homeImageMobile from '../../assets/TFE_mobile_homepage_image.jpg'
import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<MediaQuery maxWidth={750}>
			{(matches)=>
				<ParallaxRow background={matches ? homeImageMobile : homeImage} />
			}
		</MediaQuery>
		<div className='menu-button-header'>
			<MenuButton inverted />
		</div>
		<Enter enterStyle='fade-up' duration='1000ms'>
			<div className='center'>
				<div className='logo-container'>
					<Logo />
				</div>
				<CustomButton 
					large
					href='https://toofareastbarber.resurva.com/book'
					onClick={() => {
						if (window.gtag) {
							window.gtag('event', 'conversion', {'send_to': 'AW-742880733/zAE2CKSoxYkYEN3rneIC'});
						}
					}}
				>
					Book Now
				</CustomButton>
			</div>
		</Enter>
		<div className='scroll-message'>
			<span>scroll down for more</span>
		</div>
	</div>
)

export default Home;