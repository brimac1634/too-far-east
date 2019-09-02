import React from 'react';

import MenuButton from '../menu-button/menu-button.component';

import './home.styles.scss';

const Home = () => (
	<div className='home'>
		<div className='menu-button-header'>
			<div className='menu-button'>
				<MenuButton inverted />
			</div>
		</div>
	</div>
)

export default Home;