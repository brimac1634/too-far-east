import React from 'react';

import GalleryItem from '../gallery-item/gallery-item.component';

import shanghai from '../../assets/shanghai.jpg';
import barber from '../../assets/barber.jpg';
import './gallery.styles.scss';

const Gallery = () => (
	<div className='gallery'>
		<GalleryItem image={shanghai} />
		<GalleryItem image={barber} />
	</div>
)

export default Gallery;