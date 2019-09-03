import React from 'react';
import { connect } from 'react-redux';

import { scrollToSection } from '../../redux/nav/nav.actions';

import navOptions from './nav-options.data';

import './nav-options.styles.scss'

const mapDisptachToProps = dispatch => ({
	scrollToSection: section => dispatch(scrollToSection(section))
})

const NavOptions = ({ inverted, show, scrollToSection }) => {

	return (
		<div className='options'>
			{
				navOptions.map(({title, section}, i) => {
					return (
						<span 
							className={`option ${inverted ? 'inverted' : null} ${show ? 'show' : 'hide'}`} 
							key={i}
							onClick={()=>scrollToSection(section)}
						>
							{title}
						</span>
					)
				})
			}
		</div>
	)
}

export default connect(null, mapDisptachToProps)(NavOptions);