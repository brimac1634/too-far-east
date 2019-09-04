import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './updates-item.styles.scss';

const UpdatesItem = ({ title, image, date, details}) => (
	<div className='updates-item'>
		<div className='image' style={{backgroundImage: `url(${image})`}} />
		<div className='content'>
			<span className='date' >{date}</span>
			<h3>{title}</h3>
			<p>{details}</p>
			<div className='button'>
				{
					details.length > 100 &&
					<CustomButton inverted>SEE MORE</CustomButton>
				}
			</div>
		</div>
	</div>
)

export default UpdatesItem;