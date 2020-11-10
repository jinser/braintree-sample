
const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'bzpncr8dsp2qc6sy',
    publicKey: 's7g77txx8kyy5qq9',
    privateKey: '35144127ab93ff6f083c8a841f74c5aa'
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  
  
  //verify card
  const newCardVerification = gateway.paymentMethod.create({
	  customerId: 'customerid1',
	  paymentMethodNonce: nonceFromTheClient,
	  options:{
		  verifyCard: true
	  }
  }, (error,result) => {
	  console.log(result);
	  res.send(result);
	  
  });
  
});

module.exports = router;