import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeBilling extends Component {
  render() {
    return (
      <StripeCheckout 
        amount={4500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    )
  }
}

export default StripeBilling; 