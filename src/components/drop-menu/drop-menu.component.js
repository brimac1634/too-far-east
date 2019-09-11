import React from 'react';
import { connect } from 'react-redux';

import NavOptions from '../nav-options/nav-options.component';
import { ReactComponent as InstaIcon } from '../../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'


import './drop-menu.styles.scss';

const mapStateToProps = state => ({
	showMenu: state.menu.showMenu
})

const DropMenu = ({ showMenu }) => (
	<div className={`drop-menu ${showMenu ? 'show' : 'hide'}`}>
		<div className='drop-menu-content'>
			<NavOptions vertical inverted show />
			<div className='icon-set'>
				<a 
					className='icon'
					href='https://www.instagram.com/toofareastbarber/' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<InstaIcon />
				</a>
				<a 
					className='icon'
					href='https://www.facebook.com/toofareastbarber/' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<FacebookIcon />
				</a>
			</div>
		</div>
	</div>
)

export default connect(mapStateToProps)(DropMenu);