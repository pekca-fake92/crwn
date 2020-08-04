import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HC57vKJtEfYg30QlVUNSka7V1GqyWNEEtN0YQGzYTi9SCiGgyU86kBOUv6YPfWrxhXQVZbOVyZ0wzOLAiXaElXg00Y4uCaKos';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      currency="INR"
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;