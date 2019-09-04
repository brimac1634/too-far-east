import React, { Component } from 'react';
// import ReactMapGL, {Marker} from 'react-map-gl';
import GoogleMapReact, { Marker } from 'google-map-react';

import { ReactComponent as PinIcon } from '../../assets/pin.svg'
import './map-box.styles.scss';

class MapBox extends Component {
	static defaultProps = {
	center: {
	  lat: 22.281622,
	  lng: 114.155809
	},
	zoom: 18
	};

	render() {

		const mapOptions = {
	        styles: [
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.province",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 65
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": "50"
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": "30"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": "40"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "hue": "#ffff00"
			            },
			            {
			                "lightness": -25
			            },
			            {
			                "saturation": -97
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "lightness": -25
			            },
			            {
			                "saturation": -100
			            }
			        ]
			    }
			]
	    };

		return (
		  <div style={{ height: '400px', width: '700px' }}>
		    <GoogleMapReact
		    	options={mapOptions}
				bootstrapURLKeys={{ key: }}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
		    >
				<Marker
					lat={22.2818}
					lng={114.1557}
				/>
		    </GoogleMapReact>
		  </div>
		);
	}
}

export default MapBox;