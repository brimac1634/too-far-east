import React from 'react';

import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'

import './loader.styles.scss';

const Loader = ({ message }) => (
	<div className='loader'>
		<div className='overlay' />
		<BlackLogo />
		<div className='content'>
			<h4>{message || ''}</h4>
		</div>
	</div>
)

export default Loader;