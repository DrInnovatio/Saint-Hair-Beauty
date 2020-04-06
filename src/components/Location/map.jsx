import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: -27.455421, lng: 153.033100 },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
  <Fragment>
   <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAFUrh6WuWUDwnjwCpKjK1Gh766gCrgpu0' }}
      defaultCenter={{ lat: -27.455421, lng: 153.033100 }}
      defaultZoom={17}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
  </Fragment>
 );
};

export default GoogleMaps;