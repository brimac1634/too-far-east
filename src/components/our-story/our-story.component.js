import React, { lazy, Suspense } from 'react';
import MediaQuery from 'react-responsive';

import ErrorBoundary from '../error-boundary/error-boundary.component';
import Loader from '../loader/loader.component';
import Enter from '../../components/enter/enter.component';

import './our-story.styles.scss';

const Gallery = lazy(() => import('../../components/gallery/gallery.component'))

const OurStory = () => (
	<div className='our-story'>
		<MediaQuery maxWidth={1024}>
			<ErrorBoundary>
				<Suspense fallback={<Loader />}>
					<Gallery />
				</Suspense>
			</ErrorBoundary>
		</MediaQuery>
		<div className='text'>
			<Enter enterStyle='fade-up' duration='1000ms'>
				<h1>OUR STORY</h1>
			</Enter>
			<Enter enterStyle='fade-up' duration='1000ms'>
				<p>
					Too Far East Barber & Co. draws inspiration from the saying "Too Far East is West," which conveys the notion that no matter how far we travel, life will inevitably lead us back to where we started. This philosophy reminds us to respect the old and embrace the new; compelling us to pay tribute to a timeless era of Hong Kong barbershops, expressed in a modern way.  
					<br/><br/>
					At Too Far East Barber & Co., customers are always welcomed with friendly vibes and complimentary drinks. Expect a unique grooming experience that blends classic and contemporary elements, while perfectly capturing the essence of our boundless journey.
				</p>
			</Enter>
		</div>
	</div>
)

export default OurStory;