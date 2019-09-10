import React from 'react';

import './arrows.styles.scss';

const LeftArrow = ({ show, upper, handleClick }) => (
	<div className={`arrow left-button ${show ? 'show-back' : 'hide-back'} ${upper ? 'upper' : null}`} onClick={handleClick}>
		<div className='button'>
			<div className='left' />
		</div>
	</div>
)

export default LeftArrow;