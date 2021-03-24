import React, { useState, useEffect } from 'react';
import ROUTES from '../constants/routes';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import PageWrapper from '../components/PageWrapper';

const MapContainer = ({ google }) => {
  const [listings, setListings] = useState([]);
  const [selected, setSelected] = useState({});
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = (marker) => {
    setSelected(marker);
    setShowInfoWindow(true);
  };

  const onCloseWindow = () => {
    setSelected({});
    setShowInfoWindow(false);
  };


  const getListings = async () => {
    const response = await fetch("http://localhost:8090/listings");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  useEffect( () => {
    // getListings()
    //   .then(res => setListings(res.listings))
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
            title={item.title}
            position={item.location}
            onClick={() => onMarkerClick(item)}
          />
        )}
      )}
      <InfoWindow
        position={selected.location}
        visible={showInfoWindow}
        clickable={true}
        onClose={onCloseWindow}
      >
        <p>{selected.title}</p>
      </InfoWindow>
      
    </Map>
    </PageWrapper>
    
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbeQpYkV7DY-uZA_fzuF0IlxclvToBMmQ',
  // apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer);

const mapStyles = {
  width: '100%',
  height: '100%'
};