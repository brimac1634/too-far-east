import React from 'react';

import shanghai from '../../assets/shanghai.jpg';
import barber from '../../assets/barber.jpg';
import './gallery.styles.scss';

const Gallery = () => (
	<div className='gallery'>
		<img className='image' src={shanghai} alt='shanghai' />
		<img className='image' src={barber} alt='barber' />
	</div>
)

export default Gallery;