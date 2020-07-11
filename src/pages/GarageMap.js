import React, { useState, Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const GarageMap = ({google}) => {
    const [showWindow, setShowWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    const onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

      return (
        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 49.8844,
           lng: -97.14704,
          }}
        >
            <Marker onClick={onMarkerClick} name={`Placeholder name`}/>
            <InfoWindow
            marker={activeMarker}
            visible={showWindow}
            onClose={onClose}
            >
                <div>
                    <h4>{selectedPlace.name}</h4>
                </div>
            </InfoWindow>
        </Map>
      );
}
  
  export default GoogleApiWrapper({
    apiKey: 'API_KEY'
  })(GarageMap);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };