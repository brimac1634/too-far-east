import React from 'react';

import './arrows.styles.scss';

const Arrows = ({ isFirst, back, next, showBack, showNext }) => (
	<div className='arrows'>
		<div className={`button ${showBack ? null : 'hide-back'}`} onClick={back}>
			<div className='left' />
		</div>
		<div className={`button ${showNext ? null : 'hide-next'}`} onClick={next}>
			{
				isFirst &&
				<div className='more'>
					<span>MORE</span>
					<span>UPDATES</span>
				</div>
			}
			<div className='right' />
		</div>
	</div>
)

export default Arrows;