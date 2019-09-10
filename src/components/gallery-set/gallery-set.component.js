import React, { useCallback } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import RightArrow from '../arrows/right-arrow.component';
import LeftArrow from '../arrows/left-arrow.component';

import gallery1 from '../../assets/TFE_gallery_1.jpg';
import gallery2 from '../../assets/TFE_gallery_2.jpg';
import gallery3 from '../../assets/TFE_gallery_3.jpg';
import gallery4 from '../../assets/TFE_gallery_4.jpg';
import './gallery-set.styles.scss';

const GallerySet = () => {
	const images = [gallery1, gallery2, gallery3, gallery4];
	const [index, setIndex] = React.useState(0);

	const nextImage = useCallback(() => {
	  if (index === images.length - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}, [index, images])
	
	React.useEffect(() => {
		const interval = setInterval(() => nextImage(), 8000)
		return () => clearInterval(interval)
	}, [index, nextImage])

	const previousImage = () => {
		if (index === 0) {
			setIndex(images.length - 1)
		} else {
			setIndex(index - 1)
		}
	}

	return (
		<div className='gallery-set'>
			<Gallery 
				index={index} 
				onRequestChange={i => setIndex(i)}
				enableControls={false}
				enableIndicators={false}
			>
				{
					images.map((image, i) => (
						<GalleryImage key={i} objectFit='cover' src={image} />
					))
				}
			</Gallery>
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
								onClick={() => setIndex(i)}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default GallerySet;