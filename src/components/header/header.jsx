import React from 'react';
import './Header.css';

class Header extends React.Component {

  render(){
    return(
      <div className='header'>
        <i className="fa fa-cut" aria-hidden="true"/>
        <h1>Saint Hair</h1>
        <div className='text'>
          <p>Home</p>
          <p>About</p>
          <p>Team</p>
          <p>Services</p>
          <p>Price List</p>
          <p>Book Online</p>
          <p>Blog</p>
          <p>Media</p>
          <p>Contact</p>
        </div>
      </div>

  
    )
  }
}

export default Header;