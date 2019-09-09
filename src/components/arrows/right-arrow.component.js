import React from 'react';

import './arrows.styles.scss';

const RightArrow = ({ isFirst, show, handleClick }) => (
	<div className={`arrow right-button ${show ? 'show-next' : 'hide-next'}`} onClick={handleClick}>
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