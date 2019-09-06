import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, href, color, inverted, padding, ...otherProps }) => (
	<button 
		className={`custom-button ${inverted ? 'inverted' : ''}`} 
		style={{
			backgroundColor: color || null, 
			padding: padding || null
		}}
		{...otherProps} 
	>
		{children}
		{
			href &&
			<a 
				className='link'
				href='https://toofareastbarber.resurva.com/book' 
				target='_blank' 
				rel='noopener noreferrer'
			>
			</a>
		}
	</button>
)

export default CustomButton;