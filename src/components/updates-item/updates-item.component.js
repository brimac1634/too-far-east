import React from 'react';
import MediaQuery from 'react-responsive';

import CustomButton from '../custom-button/custom-button.component';

import './updates-item.styles.scss';

const UpdatesItem = ({ title, image, date, type, details}) => (
	<MediaQuery maxWidth={500}>
		{(matches) => 
			<div className='updates-item'>
				<div className='image' style={{backgroundImage: `url(${image})`}} />
				<div className='content'>
					<span className='date' >{date}</span>
					<span className='italic'>{type}</span>
					<h3>{title}</h3>
					<p>{details}</p>
					<div className='button'>
						{
							details.length > 100 &&
							<CustomButton 
								inverted 
								padding='0 15px'
								tiny={matches}
							>
								SEE MORE
							</CustomButton>
						}
					</div>
				</div>
			</div>
		}
	</MediaQuery>
)

export default UpdatesItem;