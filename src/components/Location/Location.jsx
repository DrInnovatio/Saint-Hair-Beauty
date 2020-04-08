import React from 'react';
import GoogleMaps from '../Location/map.jsx';
import './Location.css';

class Location extends React.Component {
  render(){
    return(
      <div>
        <h1 className="location">Our Location</h1>
          <GoogleMaps/>
      </div>
    )
  };
};

export default Location;