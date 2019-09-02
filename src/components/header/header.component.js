import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from '../menu-button/menu-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss';

class Header extends Component {
	state = {
		showHeader: false
	}

	componentDidMount() {
        window.addEventListener('scroll', this.checkWindowScroll)
    }

    checkWindowScroll = () => {
        this.setState({ showHeader: window.pageYOffset >= window.innerHeight })
    }

    render() {
    	const { showHeader } = this.state;

    	const fade = showHeader ? 'fade-in' : 'fade-out'

    	return (
    		<div className={`header ${fade}`}>
				<MenuButton />
				<Link className='logo-container' to={'/'}>
					<Logo />
				</Link>
				<CustomButton inverted>
					Book Now
				</CustomButton>
			</div>
    	)
    }
}

export default Header;