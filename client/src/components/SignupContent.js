import React from 'react';
import StripeBilling from './StripeBilling';

function SignupContent() {
  return (
    <div>
      <h1>Signup Content will go here... but the payment button works <span role="img" aria-label="emoji">😃</span></h1>
      <div className="Signup-Content" style={{marginLeft: '600px'}}>
        <StripeBilling />
      </div>
    </div>
  )
}

export default SignupContent;