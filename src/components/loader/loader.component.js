import React from 'react';

import './loader.styles.scss';

const Loader = ({ message }) => (
	<div className='loader'>
		<div className='ellipsis'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div className='content'>
			<h4>{message || ''}</h4>
		</div>
	</div>
)

export default Loader;