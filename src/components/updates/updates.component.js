import React from 'react';

import Arrows from '../arrows/arrows.component';
import UpdatesItem from '../updates-item/updates-item.component';
import updateData from './updates.data';

import './updates.styles.scss';

const Updates = () => (
	<div className='updates'>
		<h1>UPDATES</h1>
		<div className='update-list'>
			{
				updateData.map(({ ...props }, i) => (
					<UpdatesItem key={i} {...props} />
				))
			}
		</div>
		<Arrows
			isFirst
			showNext
		/>
	</div>
)

export default Updates;