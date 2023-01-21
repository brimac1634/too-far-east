import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Carousel from '../carousel/carousel.component';
import Enter from '../../components/enter/enter.component';
import VideoSection from '../../components/video-section/video-section';

import gallery1 from '../../assets/TFE_gallery_1.jpg';
import gallery2 from '../../assets/TFE_gallery_2.jpg';
import gallery3 from '../../assets/TFE_gallery_3.jpg';
import gallery4 from '../../assets/TFE_gallery_4.jpg';
import galleryMobile1 from '../../assets/TFE_mobile_gallery_1.jpg';
import galleryMobile2 from '../../assets/TFE_mobile_gallery_2.jpg';
import galleryMobile3 from '../../assets/TFE_mobile_gallery_3.jpg';
import galleryMobile4 from '../../assets/TFE_mobile_gallery_4.jpg';

import './gallery.styles.scss';

const Gallery = () => {
	const isMobile = useMediaQuery({ maxWidth: 600 })
	const images = isMobile
		? [galleryMobile1, galleryMobile2, galleryMobile3, galleryMobile4]
		: [gallery1, gallery2, gallery3, gallery4]

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
					<div className='image'>
						<VideoSection />
					</div>
		        </Carousel>
	        </div>
        </Enter>
	)
}

export default Gallery;