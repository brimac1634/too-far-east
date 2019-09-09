import React, { Component } from 'react';

import Arrows from '../arrows/arrows.component';

import gallery1 from '../../assets/TFE_gallery_1.jpg';
import gallery2 from '../../assets/TFE_gallery_2.jpg';
import gallery3 from '../../assets/TFE_gallery_3.jpg';
import gallery4 from '../../assets/TFE_gallery_4.jpg';
import './gallery.styles.scss';

class Gallery extends Component {
	state = {
		images: [gallery1, gallery2, gallery3, gallery4],
		currentImage: 0,
		nextImage: 1,
		isChanging: false,
		isPlaying: true
	}

	componentDidMount() {
		const setTimer = () => setTimeout(()=>{
			const { isPlaying } = this.state;
			if (isPlaying) { this.handleNext(true) }
			setTimer();
		}, 8000)
		setTimer();
	}

	handleNext = next => {
		let { images, currentImage } = this.state;
		let nextImage;
		if (next) {
			nextImage = currentImage === images.length - 1
				?	0
				: 	currentImage + 1
		} else {
			nextImage = currentImage === 0
				?	images.length - 1
				: 	currentImage - 1
		}
		this.handleIndicator(nextImage);
	}

	handleIndicator = nextImage => {
		this.setState({ nextImage, isChanging: true })
		setTimeout(()=>{
			this.setState({ currentImage: nextImage, isChanging: false})
		}, 300)
	}

	togglePlay = () => this.setState({ isPlaying: !this.state.isPlaying})
	

	render() {
		const { images, currentImage, nextImage, isChanging, isPlaying } = this.state;
		return (
			<div className='gallery'>
				<div className='image' style={{backgroundImage: `url(${images[nextImage]})`}} />
				<div 
					className={`image ${isChanging ? 'fade-out' : null}`}
					style={{backgroundImage: `url(${images[currentImage]})`}} 
				/>
				<Arrows 
					showBack
					showNext
					back={()=>this.handleNext(false)}
					next={()=>this.handleNext(true)}
				/>
				<div className='indicators'>
					{
						images.map((image, i) => {
							const isCurrent = i === currentImage;
							return (
								<div 
									key={i} 
									className={`indicator ${isCurrent ? 'current': null}`} 
									onClick={()=>this.handleIndicator(i)}
								/>
							)
						})
					}
				</div>
				<div className={isPlaying ? 'pause' : 'play'} onClick={this.togglePlay} />
			</div>
		)
	}
}

export default Gallery;