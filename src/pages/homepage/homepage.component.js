import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import Home from '../../components/home/home.component';
import OurStory from '../../components/our-story/our-story.component';
import Contact from '../../components/contact/contact.component';
import Updates from '../../components/updates/updates.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import Loader from '../../components/loader/loader.component';

const Gallery = lazy(() => import('../../components/gallery/gallery.component'))

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
				<MediaQuery minWidth={1025}>
					<div ref={this.Gallery}>
						<ErrorBoundary>
							<Suspense fallback={<Loader />}>
								<Gallery />
							</Suspense>
						</ErrorBoundary>
					</div>
				</MediaQuery>
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