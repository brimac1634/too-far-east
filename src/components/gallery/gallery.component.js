import React, { useCallback, useEffect, useState, useRef} from 'react';
import { useMediaQuery } from 'react-responsive';

import RightArrow from '../arrows/right-arrow.component';
import LeftArrow from '../arrows/left-arrow.component';

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
	const [index, setIndex] = useState(0);
	const [translateValue, setTranslation] = useState(0);
	const galleryItem = useRef(null);

	const nextImage = useCallback(() => {
		const { width } = galleryItem.current.getBoundingClientRect()
	    if (index === images.length - 1) {
			setIndex(0)
			setTranslation(0)
		} else {
			setTranslation((index + 1) * -width)
			setIndex(index + 1)
		} 
	}, [index, images])

	
	
	useEffect(() => {
		const interval = setInterval(() => nextImage(), 8000)
		return () => clearInterval(interval)
	}, [index, nextImage])

	const previousImage = () => {
		const { width } = galleryItem.current.getBoundingClientRect()
		if (index === 0) {
			setIndex(images.length - 1)
			setTranslation(-width * (images.length - 1))
		} else {
			setTranslation((index - 1) * -width)
			setIndex(index - 1)
		}
	}

	const handleIndicator = index => {
		const { width } = galleryItem.current.getBoundingClientRect()
		setIndex(index)
		setTranslation(index * -width)
	}

	return (
		<div className='gallery' ref={galleryItem}> 
			<div 
				className="slider-wrapper"
	          	style={{
		            transform: `translateX(${translateValue}px)`
	            }}
	         >
	            {
	              images.map((image, i) => (
	                <div 
	                	className='image'
	                	style={{backgroundImage: `url(${image})`}} 
	                	key={i}  
	                />
	              ))
	            }
	        </div>
			<LeftArrow show handleClick={previousImage} />
			<RightArrow show handleClick={nextImage} />
			<div className='indicators'>
				{
					images.map((image, i) => {
						const isCurrent = i === index;
						return (
							<div 
								key={i} 
								className={`indicator ${isCurrent ? 'current': null}`} 
								onClick={() => handleIndicator(i)}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default Gallery;