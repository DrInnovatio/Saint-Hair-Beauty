import React from 'react';

import './Contact.css';

class Contact extends React.Component {

  render(){
    return(
      <div className="mainContact">

        <div className="icons">
          <i className="fa fa-mobile 7x" aria-hidden="true"/> 0404-999-999
          <i className="fa fa-envelope 7x" aria-hidden="true"/> hair@gmail.com
        </div>

        <button className="bookingButton" type="button">Book Now</button>

        <div className="sns">
          <i class="fa fa-facebook-square"/>
          <i class="fa fa-instagram"/>
          <i class="fa fa-twitter-square"/>
        </div>

        <div className="payment">        
          <i className="fa fa-cc-visa"/>
          <i className="fa fa-cc-paypal"/>
          <i className="fa fa-cc-mastercard"/>
        </div>

       
      </div>
    )
  }
}

export default Contact;
