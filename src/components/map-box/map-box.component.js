import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import { ReactComponent as PinIcon } from '../../assets/pin.svg'

import './map-box.styles.scss';

class MapBox extends Component {
	state = {
	    viewport: {
	        width: 900,
	        height: 380,
	        latitude: 22.281622,
	        longitude: 114.155809,
	        zoom: 15
	    }
    };

    render() {
    	const { viewport } = this.state;
    	return (
    		<div className='map-box'>
				<ReactMapGL
				    { ...viewport }
				    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
				    onViewportChange={(viewport) => this.setState({viewport})}
				>
					<Marker 
						latitude={22.28153}
						longitude={114.15585} 
						offsetLeft={-20} 
						offsetTop={-40} 
					>
						<div className='tick-container'>
							<PinIcon fill='#f54545' />
						</div>
					</Marker>
				</ReactMapGL>
			</div>
    	)
    }
}

export default MapBox;