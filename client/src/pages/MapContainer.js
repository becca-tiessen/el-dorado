import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import PageWrapper from '../components/PageWrapper';

const MapContainer = ({ google }) => {
  const [listings, setListings] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState({});
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setShowInfoWindow(true);
  };

  const onCloseWindow = () => {
    setSelectedMarker({});
    setShowInfoWindow(false);
  };


  const getListings = async () => {
    await fetch('/listings')
    .then(res => res.json())
    .then(
      (listings) => {
        setListings(listings);
      },
      (error) => {
        console.log(error);
      })
    return ;
  };


  useEffect(() => {
    getListings();
  },[]);
  
  return (
    <PageWrapper>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 49.8844,
          lng: -97.14704,
        }}
      >
      {listings.map(item => {
        return (
          <Marker
            key={item.id}
            title={item.name}
            position={{lat: item.lat, lng: item.lng}}
            onClick={() => onMarkerClick(item)}
          />
        )}
      )}
      <InfoWindow
        position={{
          lat: parseFloat(selectedMarker.lat), 
          lng: parseFloat(selectedMarker.lng)
        }}
        visible={showInfoWindow}
        clickable={true}
        onClose={onCloseWindow}
      >
        <p>{selectedMarker.name}</p>
      </InfoWindow>
      
    </Map>
    </PageWrapper>
    
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQU2XSRYRooncNw9ZJSkVDNjKH1DzJGRc',
  // apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer);

const mapStyles = {
  width: '100%',
  height: '100%'
};