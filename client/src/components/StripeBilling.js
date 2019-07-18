import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';

class StripeBilling extends Component {
  render() {
    return (
      <StripeCheckout 
        name={'RX Life Challenge'}
        description={'READY! SET! GO!'}
        amount={4500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button variant="outlined" color="secondary">Get the Challenge!</Button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(StripeBilling); 