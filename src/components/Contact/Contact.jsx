import React from 'react';

import './Contact.css';

class Contact extends React.Component {

  render(){
    return(
      <div className="mainContact">

        <div className="icons">
          <i className="fa fa-mobile 7x" aria-hidden="true"/> 0404-999-999
          <br/>
          <i className="fa fa-envelope 7x" aria-hidden="true"/> hair@gmail.com
        </div>

        <button className="bookingButton" type="button">Book Now</button>
        <div className="payment">

        
        <i className="fa fa-cc-visa"></i>
        <i className="fa fa-cc-paypal"></i>
        <i className="fa fa-cc-mastercard"></i>

        </div>
      </div>
    )
  }
}

export default Contact;
