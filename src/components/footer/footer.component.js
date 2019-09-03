import React from 'react';

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
			<div className='options'>
				<span 
					className='option' 
					onClick={()=>handleSection('Home')}
				>
					home
				</span>
				<span 
					className='option' 
					onClick={()=>handleSection('OurStory')}
				>
					our story
				</span>
				<span 
					className='option' 
					onClick={()=>handleSection('Gallery')}
				>
					gallery
				</span>
				<span 
					className='option' 
					onClick={()=>handleSection('Contact')}
				>
					contact us
				</span>
				<span 
					className='option' 
					onClick={()=>handleSection('Updates')}
				>
					updates
				</span>
			</div>
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