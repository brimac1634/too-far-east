import React, { useState, useEffect } from 'react';
import './parallax-row.styles.scss';

const ParallaxRow = ({ children, background, height }) => {
	const [offset, setOffset] = useState(0);

	useEffect(()=>{
		window.addEventListener('scroll', ()=>setOffset(window.pageYOffset));
		return window.removeEventListener('scroll', ()=>setOffset(window.pageYOffset));
	}, [setOffset])
	
	return (
		<div 
			className='parallax-background' 
			style={{ 
				backgroundImage: `url(${background})`,
				backgroundPositionY: offset / 5,
				height: height || null
			}}
		>
			<div
		      className='info-container'
		      style={{ bottom: offset }}
		    >
			    {children}
		    </div>
		</div>
	)
}

export default ParallaxRow;