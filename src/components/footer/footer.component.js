import React from 'react';

import { ReactComponent as InstaIcon } from '../../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'

import './footer.styles.scss';

const Footer = () => (
	<div className='footer'>
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
)

export default Footer;