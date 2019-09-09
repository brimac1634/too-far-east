import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import { scrollToSection } from '../../redux/nav/nav.actions';

import navOptions from './nav-options.data';

import './nav-options.styles.scss'

const mapDisptachToProps = dispatch => ({
	scrollToSection: section => dispatch(scrollToSection(section))
})

const NavOptions = ({ inverted, show, vertical, scrollToSection }) => {

	const handleScroll = section => {
		scrollToSection(section)
		setTimeout(()=>scrollToSection(null), 1000)
	}

	return (
		<MediaQuery maxWidth={1024}>
			{(matches) =>
				<div className={`options ${vertical ? 'vertical' : null}`}>
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

export default connect(null, mapDisptachToProps)(NavOptions);