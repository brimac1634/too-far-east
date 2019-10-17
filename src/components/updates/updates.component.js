import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';

import Carousel from '../carousel/carousel.component';
import RightArrow from '../arrows/right-arrow.component';
import LeftArrow from '../arrows/left-arrow.component';
import UpdatesItem from '../updates-item/updates-item.component';
import Loader from '../loader/loader.component';

import { selectUpdates, selectAreUpdatesFetching } from '../../redux/updates/updates.selectors';
import { fetchUpdatesStart } from '../../redux/updates/updates.actions';

import './updates.styles.scss';

const mapStateToProps = createStructuredSelector({
	updates: selectUpdates,
	updatesAreFetching: selectAreUpdatesFetching
})

const mapDispatchToProps = dispatch => ({
	fetchUpdatesStart: () => dispatch(fetchUpdatesStart())
})

class Updates extends Component {
	constructor() {
		super();
		this.state = {
			scroll: 0,
			fullyScrolled: true
		}
		this.list = React.createRef();
	}

	componentDidMount() {
		const { fetchUpdatesStart } = this.props;
		fetchUpdatesStart()
	}

	componentDidUpdate(prevProps) {
		const { updates } = this.props;
		const { current } = this.list;
		if (this.list.current && updates !== prevProps.updates) {
			this.setState({ fullyScrolled: current.scrollWidth <= current.clientWidth})
		}
	}

	handleListScroll = ({ target }) => {
		this.setState({ 
			scroll: target.scrollLeft,
			fullyScrolled: target.scrollWidth - target.clientWidth === target.scrollLeft
			})
	}

	moveList = increment => {
		const { scroll } = this.state;
		this.list.current.scrollTo({
			top: 0,
			left: scroll + increment,
			behavior: 'smooth'
		})
	}

	render() {
		const { scroll, fullyScrolled } = this.state;
		const { updates, updatesAreFetching } = this.props;

		return (
			<Fade>
				<MediaQuery minWidth={501}>
					{(matches) => 
						<div>
							{
								matches
								?	<div className='updates'>
										<div 
											ref={this.list} 
											onScroll={this.handleListScroll} 
											className='update-list'
										>
											{
												updates &&
												updates.map(({ ...props }, i) => (
													<UpdatesItem key={i} {...props} />
												))
											}
										</div>
										<LeftArrow 
											show={scroll >= 60} 
											upper={!matches}
											handleClick={()=>this.moveList(matches ? -320 : -window.innerWidth)} 
										/>
										<RightArrow 
											show={!fullyScrolled} 
											isFirst={scroll <= 60} 
											upper={!matches}
											handleClick={()=>this.moveList(matches ? 320 : window.innerWidth)} 
										/>
									</div>
								: 	<div className='updates-mobile'>
										{
											updates &&
											<Carousel 
												disablePlay
												disableLeap
												showMoreMessage
											>
												{
													updates.map(({ ...props }, i) => (
														<UpdatesItem key={i} {...props} />
													))
												}
											</Carousel>
										}
									</div>
							}
							{
								updatesAreFetching &&
								<Loader />
							}
						</div>
					}
				</MediaQuery>
			</Fade>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Updates);