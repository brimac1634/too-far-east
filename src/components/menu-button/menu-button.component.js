import React, { Component } from 'react';

import NavOptions from '../nav-options/nav-options.component';

import './menu-button.styles.scss'

class MenuButton extends Component {
	state = {
		showMenu: false
	}

	render() {
		const { inverted } = this.props;
		const { showMenu } = this.state;
		return (
			<div 
				className='menu'
				onClick={()=>this.setState({ showMenu: !showMenu})}
			>
				<div className='menu-button' >
					<div className={`menu-lines ${inverted ? 'inverted' : null}`} />
				</div>
				<NavOptions inverted={inverted} show={showMenu} />
			</div>
		)
	}
}

export default MenuButton;