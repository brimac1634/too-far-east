import React from 'react';

import './loader.styles.scss';

const Loader = ({ message }) => (
	<div className='loader'>
		<div className='content'>
			<h1>{message || 'Loading'}</h1>
		</div>
	</div>
)

export default Loader;