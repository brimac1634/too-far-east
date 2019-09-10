import React from 'react';

import './arrows.styles.scss';

const RightArrow = ({ isFirst, show, upper, handleClick }) => (
	<div className={`arrow right-button ${show ? 'show-next' : 'hide-next'} ${upper ? 'upper' : null}`} onClick={handleClick}>
		<div className={`more ${isFirst ? 'show-more' : 'hide-more'}`}>
			<span>MORE</span>
			<span>UPDATES</span>
		</div>
		<div className='button'>
			<div className='right' />
		</div>
	</div>
)

export default RightArrow;