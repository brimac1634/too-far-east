import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import { scrollToSection } from '../../redux/nav/nav.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleMenu } from '../../redux/menu/menu.actions';

import navOptions from './nav-options.data';

import './nav-options.styles.scss'

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

const mapDisptachToProps = dispatch => ({
	scrollToSection: section => dispatch(scrollToSection(section)),
	signOutStart: () => dispatch(signOutStart()),
	toggleMenu: showMenu => dispatch(toggleMenu(showMenu))
})

const NavOptions = ({ toggleMenu, currentUser, history, inverted, show, vertical, scrollToSection, signOutStart }) => {

	const handleScroll = section => {
		scrollToSection(section)
		toggleMenu(false)
		setTimeout(()=>scrollToSection(null), 1000)
	}

	const handleNewUpdate = () => {
		history.push('/new-update')
		toggleMenu(false)
	}

	return (
		<MediaQuery maxWidth={1024}>
			{(matches) =>
				<div className={`options ${vertical ? 'vertical' : null}`}>
					{
						currentUser &&
						<div className='admin'>
							<span 
								className={`option ${inverted ? 'inverted' : null} ${show ? 'show' : 'hide'}`} 
								onClick={handleNewUpdate}
							>
								New Update
							</span>
							<span 
								className={`option ${inverted ? 'inverted' : null} ${show ? 'show' : 'hide'}`} 
								onClick={signOutStart}
							>
								Logout
							</span>
						</div>
					}
					{
						navOptions.filter(({title})=>{
							if (matches && title === 'gallery') {
								return false;
							} else { return true; }
						}).map(({title, section}, i) => {
							
							return (
								<span 
									className={`option ${inverted ? 'inverted' : null} ${show ? 'show' : 'hide'}`} 
									key={i}
									onClick={()=>handleScroll(section)}
								>
									{title}
								</span>
							)
						})
					}
				</div>
			}
		</MediaQuery>
	)
}

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(NavOptions));