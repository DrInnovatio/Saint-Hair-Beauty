import React from 'react';

import './Contact.css';

class Contact extends React.Component {

  render(){
    return(
      <div className="mainContact">

        <i className="fa fa-mobile" aria-hidden="true"/> 0404-999-999
        <i className="fa fa-envelope" aria-hidden="true"/>guriguri@gmail.com
        <button className="bookingButton" type="button">Book Now</button>
      </div>
    )
  }
}

export default Contact;
