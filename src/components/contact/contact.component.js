import React, { lazy, Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';

import ErrorBoundary from '../error-boundary/error-boundary.component';
import Loader from '../loader/loader.component';

import { ReactComponent as InstaIcon } from '../../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import { ReactComponent as PinIcon } from '../../assets/pin.svg'
import { ReactComponent as MailIcon } from '../../assets/email.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'

import './contact.styles.scss';

const MapBox = lazy(() => import('../map-box/map-box.component'))

const Contact = () => (
	<div className='contact'>
		<ErrorBoundary>
			<MediaQuery maxWidth={1024}>
				<Suspense fallback={<Loader />}>
					<div className='map'>
						<MapBox />
					</div>
				</Suspense>
			</MediaQuery>
			<Fade>
				<div className='heading'>
					<h1>Contact Us</h1>
					<div className='row'>
						<PinIcon />
						<span>
							Unit 15C, 4/F, 15 Wellington Street, Central, Hong Kong
						</span>
					</div>
				</div>
			</Fade>
			<Fade>
				<div className='bottom'>
					<div className='details'>
						<div className='social'>
							<div className='row'>
								<MailIcon />
								<a 
									href='mailto:info@toofareastbarber.com' 
									target='_blank' 
									rel='noopener noreferrer'
								>
									info@toofareastbarber.com
								</a>
							</div>
							<div className='row'>
								<PhoneIcon />
								<a href='tel:+852-9337-9868'>+852-9337-9868</a>
							</div>
							<div className='row'>
								<FacebookIcon />
								<a 
									className='icon'
									href='https://www.facebook.com/toofareastbarber/' 
									target='_blank' 
									rel='noopener noreferrer'
								>
									toofareastbarber
								</a>
							</div>
							<div className='row'>
								<InstaIcon />
								<a 
									className='icon'
									href='https://www.instagram.com/toofareastbarber/' 
									target='_blank' 
									rel='noopener noreferrer'
								>
									toofareastbarber
								</a>
							</div>
						</div>
					</div>
					<MediaQuery minWidth={1025}>
						<Suspense fallback={<Loader />}>
							<div className='map'>
								<MapBox />
							</div>
						</Suspense>
					</MediaQuery>
				</div>
			</Fade>
		</ErrorBoundary>
	</div>
)

export default Contact;