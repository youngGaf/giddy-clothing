import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J4AHLFoPUuRzeTE5FSJBzaqFtcP2m72l33vjbf3NCB7edLUaojAaUuyN6nj8YD5zlBEwraOQuq9UWOQDOOd187Y00GUyWM9b4';

    const onToken =(token)=> {
        console.log(token);
        alert('Payment Successful!')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='GIDDY Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;