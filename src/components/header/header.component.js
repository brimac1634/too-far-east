import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import { scrollToSection } from '../../redux/nav/nav.actions';

import MenuButton from '../menu-button/menu-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as WhiteLogo } from '../../assets/TFE_white_logo.svg'
import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'
import GtagService from '../../services/gtag.service';

import './header.styles.scss';

const mapDisptachToProps = dispatch => ({
	scrollToSection: section => dispatch(scrollToSection(section))
})

class Header extends Component {
	state = {
		showHeader: false,
		inverted: false
	}

	componentDidMount() {
        window.addEventListener('scroll', this.checkWindowScroll)
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', this.checkWindowScroll)
    }

    checkWindowScroll = () => {
    	this.setState({ 
    		showHeader: window.pageYOffset >= window.innerHeight - 80,
    		inverted: window.pageYOffset >= window.innerHeight * 2 - 40 && window.pageYOffset <= window.innerHeight * 3 - 40
    	})
    }

    render() {
    	const { scrollToSection } = this.props;
    	const { showHeader, inverted } = this.state;
    	const fade = showHeader ? 'fade-in' : 'fade-out'

    	return (
    		<MediaQuery maxWidth={1024}>
				{(matches) => {
					const invert = inverted && !matches ? 'inverted' : null
					return (
						<div className={`header ${fade} ${invert}`}>
	    					<MenuButton inverted={inverted && !matches} />
							<div className='logo-container' onClick={()=>scrollToSection('Home')}>
								{
									inverted && !matches
									? 	<WhiteLogo />
									: 	<BlackLogo />
								}
							</div>
							<div className='book-button'>
								<CustomButton 
									tiny
									href='https://toofareastbarber.resurva.com/book' 
									inverted={!inverted || matches}
									onClick={GtagService.trackBookNowEvent}
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

export default connect(null, mapDisptachToProps)(Header);