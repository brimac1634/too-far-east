import React, { lazy, Suspense } from 'react';
import MediaQuery from 'react-responsive';

import ErrorBoundary from '../error-boundary/error-boundary.component';
import Loader from '../loader/loader.component';
import Enter from '../../components/enter/enter.component';

import { ReactComponent as InstaIcon } from '../../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import { ReactComponent as PinIcon } from '../../assets/pin.svg'
import { ReactComponent as MailIcon } from '../../assets/email.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'

import './contact.styles.scss';
import GtagService from '../../services/gtag.service';

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
			<Enter enterStyle='fade-up' duration='1000ms'>
				<div className='heading'>
					<h1>Contact Us</h1>
					<div className='address-row'>
						<div className='inner-row'>
							<PinIcon className='pin' />
							<a href='https://maps.app.goo.gl/maMfZXGJN1cXfouT7' target='_blank' rel='noopener noreferrer' onClick={GtagService.trackSheungWanContactEvent}>
								<strong>Central | Sheung Wan Location:</strong>
								<MediaQuery maxWidth={1024}>
									<br/>
								</MediaQuery>
								{' '}G/F, 180 Wellington Street
							</a>
						</div>
						<div className='inner-row'>
							<PhoneIcon />
							<a href='tel:+852-5795-3579'>+852-5795-3579</a>
						</div>
					</div>
					<div className='address-row'>
						<div className='inner-row'>
							<PinIcon className='pin' />
							<a href='https://maps.app.goo.gl/HZPvh4o6NFMiXigu9' target='_blank' rel='noopener noreferrer' onClick={GtagService.trackCausewayBayContactEvent}>
								<strong>Causeway Bay Location:</strong>
								<MediaQuery maxWidth={1024}>
									<br/>
								</MediaQuery>
								{' '}3/F, 14 Kai Chiu Road
							</a>
						</div>
						<div className='inner-row'>
							<PhoneIcon />
							<a href='tel:+852-9330-3851'>+852-9330-3851</a>
						</div>
					</div>
				</div>
			</Enter>
			<Enter enterStyle='fade-up' duration='1000ms'>
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
			</Enter>
		</ErrorBoundary>
	</div>
)

export default Contact;