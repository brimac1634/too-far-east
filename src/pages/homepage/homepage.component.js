import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../../components/home/home.component';
import Updates from '../../components/updates/updates.component';
import Contact from '../../components/contact/contact.component';
import OurStory from '../../components/our-story/our-story.component';
import Gallery from '../../components/gallery/gallery.component';


const mapStateToProps = state => ({
	section: state.nav.section
})

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

	handleScroll = (ref) => {
		if (this[ref]) {
			this[ref].current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	render() {
		return (
			<div>
				<div ref={this.Home}>
					<Home />
				</div>
				<div ref={this.OurStory}>
					<OurStory />
				</div>
				<div ref={this.Gallery}>
					<Gallery />
				</div>
				<div ref={this.Contact}>
					<Contact />
				</div>
				<div ref={this.Updates}>
					<Updates />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(HomePage);