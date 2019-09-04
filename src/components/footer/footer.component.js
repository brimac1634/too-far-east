import React from 'react';

import NavOptions from '../nav-options/nav-options.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as InstaIcon } from '../../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'

import './footer.styles.scss';

const Footer = ({ handleSection }) => (
	<div className='footer'>
		<div className='footer-content'>
			<CustomButton href='https://toofareastbarber.resurva.com/book'>
				Book Now
			</CustomButton>
			<NavOptions vertical inverted show />
			<div className='icon-set'>
				<a 
					className='icon'
					href='https://www.instagram.com/toofareastbarber/' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<InstaIcon />
				</a>
				<a 
					className='icon'
					href='https://www.facebook.com/toofareastbarber/' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<FacebookIcon />
				</a>
			</div>
		</div>
	</div>
)

export default Footer;