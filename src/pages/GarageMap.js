import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class GarageMap extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 49.8844,
           lng: -97.14704,
          }}
        >
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbBGibCSmXIzaqLRzK7tqO_9pC1LIhvyg'
  })(GarageMap);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };