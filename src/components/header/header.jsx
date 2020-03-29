import React from 'react';
import './header.css';

class Header extends React.Component {

  render(){
    return(
      <div className='header'>
        <i className="fa fa-cut" aria-hidden="true"/>
        <h1>Saint Hair</h1>
        <div className='text'>
          <p>About Us</p>
          <p>Booking</p>
          <p>Contact me</p>
        </div>
      </div>
    )
  }
}

export default Header;