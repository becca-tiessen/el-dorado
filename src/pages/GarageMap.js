import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapView extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDb5FBP8XoA9I543RTy-Msz0b7PSoT7VuQ'
  })(MapView);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };