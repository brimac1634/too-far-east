import React from 'react';

import Enter from '../../components/enter/enter.component';
import Carousel from '../carousel/carousel.component';

import gallery10 from '../../assets/TFE_gallery_10.jpg';
import gallery11 from '../../assets/TFE_gallery_11.jpg';
import gallery2 from '../../assets/TFE_gallery_2.jpg';
import gallery4 from '../../assets/TFE_gallery_4.jpg';
import gallery5 from '../../assets/TFE_gallery_5.jpg';
import gallery6 from '../../assets/TFE_gallery_6.jpg';
import gallery7 from '../../assets/TFE_gallery_7.jpg';
import gallery8 from '../../assets/TFE_gallery_8.jpg';
import gallery9 from '../../assets/TFE_gallery_9.jpg';

import './gallery.styles.scss';

const Gallery = () => {
	const images = [gallery10, gallery5, gallery6, gallery7, gallery8, gallery2, gallery11, gallery9, gallery4]

	return (
		<Enter lazy>
			<div className='gallery'>
				<Carousel showIndicator disablePlay>
		            {
		              images.map((image, i) => (
		                <div 
		                	className='image'
		                	style={{backgroundImage: `url(${image})`}} 
		                	key={i}  
		                />
		              ))
		            }
					{/* <div className='image'>
						<VideoSection />
					</div> */}
		        </Carousel>
	        </div>
        </Enter>
	)
}

export default Gallery;