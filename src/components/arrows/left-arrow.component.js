import React from 'react';

import './arrows.styles.scss';

const LeftArrow = ({ show, bottom, handleClick }) => (
	<div className={`arrow left-button ${show ? 'show-back' : 'hide-back'} ${bottom ? 'bottom' : null}`} onClick={handleClick}>
		<div className='button'>
			<div className='left' />
		</div>
	</div>
)

export default LeftArrow;