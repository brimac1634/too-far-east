import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import MenuButton from '../menu-button/menu-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as WhiteLogo } from '../../assets/TFE_white_logo.svg'
import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'

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
    		showHeader: window.pageYOffset >= window.innerHeight - 40,
    		inverted: window.pageYOffset >= window.innerHeight * 2 - 40 && window.pageYOffset <= window.innerHeight * 3 - 40
    	})
    }

    render() {
    	const { showHeader, inverted } = this.state;

    	const fade = showHeader ? 'fade-in' : 'fade-out'
    	

    	return (
    		<MediaQuery maxWidth={1024}>
				{(matches) => {
					const invert = inverted && !matches ? 'inverted' : null
					return (
						<div className={`header ${fade} ${invert}`}>
	    					<MenuButton inverted={inverted && !matches} />
							<Link className='logo-container' to={'/'}>
								{
									inverted && !matches
									? 	<WhiteLogo />
									: 	<BlackLogo />
								}
							</Link>
							<div className='book-button'>
								<CustomButton 
									tiny
									href='https://toofareastbarber.resurva.com/book' 
									inverted={!inverted || matches}
								>
									{matches ? 'Book' : 'Book Now'}
								</CustomButton>
							</div>
						</div>
					)
				}}
			</MediaQuery>
    	)
    }
}

export default Header;