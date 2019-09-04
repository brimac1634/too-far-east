import React from 'react';

import './gallery-item.styles.scss';

const GalleryItem = ({ image }) => (
	<div className='gallery-item'>
		<div className='image' style={{backgroundImage: `url(${image})`}} />
	</div>
)

export default GalleryItem;