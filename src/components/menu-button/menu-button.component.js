import React from 'react';
import { connect } from 'react-redux';

import { toggleMenu } from '../../redux/menu/menu.actions';

import './menu-button.styles.scss'

const mapStateToProps = state => ({
	showMenu: state.menu.showMenu
})

const mapDispatchToProps = dispatch => ({
	toggleMenu: showMenu => dispatch(toggleMenu(showMenu))
})

const MenuButton = ({ showMenu, toggleMenu, inverted}) => (
	<div 
		className={`menu ${showMenu ? 'close' : null}`}
		onClick={()=>toggleMenu(!showMenu)}
	>
		<div className='menu-button' >
			<div className={`menu-lines ${inverted ? 'inverted' : null}`}>
				<div></div>
			</div>
		</div>
	</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);