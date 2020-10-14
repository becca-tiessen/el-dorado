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
    const response = await fetch(ROUTES.LISTINGS);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  useEffect( () => {
    getListings()
      .then(res => setListings(res.listings))
  },[]);

  console.log(selected)
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
  apiKey: 'AIzaSyDyy_4tCE_t4Qf_HYvc_aFBs0Ic38-xfjc'
})(MapContainer);

const mapStyles = {
  width: '100%',
  height: '100%'
};