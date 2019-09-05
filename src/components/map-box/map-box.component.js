import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import { ReactComponent as PinIcon } from '../../assets/pin.svg'

import './map-box.styles.scss';

class MapBox extends Component {
	state = {
	    viewport: {
	        width: 800,
	        height: 350,
	        latitude: 22.281622,
	        longitude: 114.155809,
	        zoom: 17
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
						latitude={22.281622}
						longitude={114.155809} 
						offsetTop={-10} 
					>
						<div className='tick-container'>
							<PinIcon />
						</div>
					</Marker>
				</ReactMapGL>
			</div>
    	)
    }
}

export default MapBox;