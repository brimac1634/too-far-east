import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MediaQuery from 'react-responsive';

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

    onViewportChange = viewport => { 
	    this.setState({ viewport })
	}

    handleZoom = increment => {
    	const { viewport, viewport: { zoom } } = this.state;
    	this.setState({
    		viewport: {
    			...viewport,
    			zoom: zoom + increment
    		}
    	})
    }

    render() {
    	const { viewport } = this.state;
    	return (
    		<div className='map-box'>
    			<MediaQuery maxWidth={1024}>
    				{(matches)=>
    					<ReactMapGL
						    { ...viewport }
						    width={matches ? window.innerWidth : window.innerWidth * 0.6}
						    height={matches ? window.innerHeight * 0.4 : 380}
						    scrollZoom={false}
						    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
						    onViewportChange={viewport => this.onViewportChange(viewport)}
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
    				}
    			</MediaQuery>
				<div className='zoom'>
					<div onClick={()=>this.handleZoom(1)}>+</div>
					<div onClick={()=>this.handleZoom(-1)}>&#8211;</div>
				</div>
			</div>
    	)
    }
}

export default MapBox;