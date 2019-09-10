import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';

import RightArrow from '../arrows/right-arrow.component';
import LeftArrow from '../arrows/left-arrow.component';
import UpdatesItem from '../updates-item/updates-item.component';
import updateData from './updates.data';

import './updates.styles.scss';

class Updates extends Component {
	constructor() {
		super();
		this.state = {
			scroll: 0
		}
		this.list = React.createRef();
	}

	handleListScroll = ({ target }) => {
		this.setState({ scroll: target.scrollLeft })
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
		const { scroll } = this.state;

		return (
			<Fade>
				<MediaQuery minWidth={501}>
					{(matches) => 
						<div className='updates'>
							<div 
								ref={this.list} 
								onScroll={this.handleListScroll} 
								className='update-list'
							>
								{
									updateData.map(({ ...props }, i) => (
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
								show 
								isFirst={scroll <= 60} 
								upper={!matches}
								handleClick={()=>this.moveList(matches ? 320 : window.innerWidth)} 
							/>
						</div>
					}
				</MediaQuery>
			</Fade>
		)
	}
}

export default Updates;