import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from '../menu-button/menu-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as Logo } from '../../assets/TFE_white_logo.svg'

import './header.styles.scss';

class Header extends Component {
	state = {
		showHeader: false,
		inverted: false
	}

	componentDidMount() {
        window.addEventListener('scroll', this.checkWindowScroll)
    }

    checkWindowScroll = () => {
    	this.setState({ 
    		showHeader: window.pageYOffset >= window.innerHeight,
    		inverted: window.pageYOffset >= window.innerHeight * 2 - 40 && window.pageYOffset <= window.innerHeight * 3
    	})
    }

    render() {
    	const { showHeader, inverted } = this.state;

    	const fade = showHeader ? 'fade-in' : 'fade-out'
    	const invert = inverted ? 'inverted' : null

    	return (
    		<div className={`header ${fade} ${invert}`}>
				<MenuButton inverted={inverted} />
				<Link className='logo-container' to={'/'}>
					<Logo />
				</Link>
				<CustomButton 
					href='https://toofareastbarber.resurva.com/book' 
					inverted={!inverted}
				>
					Book Now
				</CustomButton>
			</div>
    	)
    }
}

export default Header;