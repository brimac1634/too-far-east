import React, { useCallback, useEffect, useState, useRef} from 'react';

import RightArrow from '../arrows/right-arrow.component';
import LeftArrow from '../arrows/left-arrow.component';

import './carousel.styles.scss';

const Carousel = ({ children, showIndicator, showMoreMessage, disableLeap, disablePlay  }) => {
	const [index, setIndex] = useState(0);
	const [translateValue, setTranslation] = useState(0);
	const galleryItem = useRef(null);

	const nextImage = useCallback(() => {
		const { width } = galleryItem.current.getBoundingClientRect()
	    if (index === children.length - 1) {
			setIndex(0)
			setTranslation(0)
		} else {
			setTranslation((index + 1) * -width)
			setIndex(index + 1)
		} 
	}, [index, children])
	
	useEffect(() => {
		if (disablePlay) return;
		const interval = setInterval(() => nextImage(), 8000)
		return () => clearInterval(interval)
	}, [index, nextImage, disablePlay])

	const previousImage = () => {
		const { width } = galleryItem.current.getBoundingClientRect()
		if (index === 0) {
			setIndex(children.length - 1)
			setTranslation(-width * (children.length - 1))
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
		<div className='carousel' ref={galleryItem}> 
			<div 
				className="slider-wrapper"
	          	style={{
					transform: `translate(${translateValue}px, 0)`,
					WebkitTransform: `translate(${translateValue}px, 0)`
	            }}
	         >
	            {children}
	        </div>
			<LeftArrow 
				show={!disableLeap || (disableLeap && index !== 0)} 
				handleClick={previousImage} 
			/>
			<RightArrow 
				show={!disableLeap || (disableLeap && index !== (children.length - 1))} 
				isFirst={showMoreMessage && index === 0} 
				handleClick={nextImage} 
			/>
			{
				showIndicator &&
				<div className='indicators'>
					{
						children.map((image, i) => {
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
			}
		</div>
	)
}

export default Carousel;