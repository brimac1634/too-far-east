import React, { lazy, Suspense } from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';

import ErrorBoundary from '../error-boundary/error-boundary.component';
import Loader from '../loader/loader.component';

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
			<Fade bottom>
				<h1>OUR STORY</h1>
			</Fade>
			<Fade bottom>
				<p>Too Far East Barber & Co. was founded by two individuals who barbered side by side from the day they entered the industry. One with deep roots in Hong Kong and the other hailing from Canada; both have immense respect for the Cantonese and Shanghainese barbers that were here before them. Naturally, Too Far East became a barbershop where East meets with West and where the old is weaved with the new. It represents their journey of going so far East that they come out West.
				</p>
			</Fade>
		</div>
	</div>
)

export default OurStory;