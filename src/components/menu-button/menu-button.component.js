import React from 'react';

import './menu-button.styles.scss'

const MenuButton = ({ inverted }) => (
	<div className='menu-button'>
		<div className={`menu-lines ${inverted ? 'inverted' : null}`} />
	</div>
)

export default MenuButton;