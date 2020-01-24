import React, { useRef, useEffect, useState } from 'react';

import { useScrollY } from '../../utils';

import './enter.styles.scss';

const Enter = ({ children, enterStyle, duration, lazy, ...otherProps }) => {
	const [show, setShow] = useState(false);
	const [load, setLoad] = useState(false);
	const enter = useRef(null);
	const scrollY = useScrollY();
	
	useEffect(()=>{
		if (!enter) return;
		const { top } = enter.current.getBoundingClientRect();
		setShow(top < window.innerHeight)
		setLoad(lazy ? top < window.innerHeight * 1.8 : true)
	}, [scrollY, lazy])

	const style = enterStyle ? enterStyle : 'fade';
	return (
		<div 
			className={`enter ${show ? style : null}`} 
			ref={enter}
			style={{
				animationDuration: duration
			}}
			{ ...otherProps }
		>
			{
				load &&
				children
			}
		</div>
	)
}
export default Enter;