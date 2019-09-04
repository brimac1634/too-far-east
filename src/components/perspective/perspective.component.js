import React, { Component } from 'react';

import './perspective.styles.scss';

class Perspective extends Component {
	state = {
		backgroundPosition: '0% 0%'
	}

	// handleMouseMove = e => {
	//     const { left, top, width, height } = e.target.getBoundingClientRect()
	//     const x = (e.pageX - left) / width * 100
	//     const y = (e.pageY - top) / height * 100
	//     this.setState({ backgroundPosition: `${x}% ${y}%` })
	// }

	render() {
		const { src, children } = this.props;
		return (
			<figure 
				className='perspective fade-in' 
				onMouseMove={this.handleMouseMove} 
				style={{ ...this.state, backgroundImage: `url(${src})`}}
			>
				{children}
		    </figure>
		)
	}
    
}

export default Perspective;