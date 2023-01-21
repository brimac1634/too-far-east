import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import Contact from '../../components/contact/contact.component';
import Home from '../../components/home/home.component';
import OurStory from '../../components/our-story/our-story.component';
import Updates from '../../components/updates/updates.component';

import './homepage.styles.scss';

const Gallery = lazy(()=>import('../../components/gallery/gallery.component'));

const mapStateToProps = state => ({
	section: state.nav.section
})

export const GALLERY_SECTION_WIDTH = 1025;

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.Home = React.createRef();
		this.OurStory = React.createRef();
		this.Gallery = React.createRef();
		this.Contact = React.createRef();
		this.Updates = React.createRef();
	}

	componentDidUpdate() {
		const { section } = this.props;
		this.handleScroll(section)
	}

	handleScroll = ref => {
		if (this[ref]) {
			this[ref].current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	render() {
		return (
			<div className='home-page'>
				<div ref={this.Home}>
					<Home />
				</div>
				<div ref={this.OurStory}>
					<OurStory />
				</div>
				<MediaQuery minWidth={GALLERY_SECTION_WIDTH}>
					<div ref={this.Gallery}>
						<Gallery />
					</div>
				</MediaQuery>
				<div ref={this.Contact}>
					<Contact />
				</div>
				<div ref={this.Updates}>
					<Updates />
				</div>
				<a 
					href='https://bmacpherson.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className='creator-link'
				>
					built by bmacpherson.com
				</a>
			</div>
		)
	}
}

export default connect(mapStateToProps)(HomePage);