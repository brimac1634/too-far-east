import React from 'react';

import './arrows.styles.scss';

const LeftArrow = ({ show, handleClick }) => (
	<div className={`arrow left-button ${show ? 'show-back' : 'hide-back'}`} onClick={handleClick}>
		<div className='button'>
			<div className='left' />
		</div>
	</div>
)

export default LeftArrow;