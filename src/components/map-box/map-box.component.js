import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MediaQuery from 'react-responsive';

import Enter from '../../components/enter/enter.component';

import { ReactComponent as PinIcon } from '../../assets/pin.svg'

import './map-box.styles.scss';

class MapBox extends Component {
	state = {
		mounted: false,
	    viewport: {
	        width: 900,
	        height: 380,
	        latitude: 22.28201715,
	        longitude: 114.168545,
	        zoom: 13
	    }
    };

    componentDidMount () {
		this.setState({ mounted: true })
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
    	const { viewport, mounted } = this.state;
    	return (
    		<div className='map-box'>
    			<Enter lazy>
	    			<MediaQuery maxWidth={1024}>
	    				{(matches)=>
	    					<ReactMapGL
							    { ...viewport }
							    width={matches ? window.innerWidth : window.innerWidth * 0.6}
							    height={matches ? window.innerHeight * 0.4 : window.innerHeight * 0.55}
							    scrollZoom={false}
							    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
							    onViewportChange={(viewport) => {
							    	if (mounted) this.setState({viewport})
							    }}
							>
								<Marker 
									latitude={22.2793743}
									longitude={114.18398} 
									offsetLeft={-20} 
									offsetTop={-40} 
								>
									<div className='tick-container'>
										<PinIcon fill='#f54545' />
									</div>
								</Marker>
								<Marker 
									latitude={22.284660}
									longitude={114.153110} 
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
				</Enter>
			</div>
    	)
    }
}

export default MapBox;