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
    
  const payAmount = req.body.amt;
  // Create a new transaction for $10 amount: '10.00',
  const newTransaction = gateway.transaction.sale({
    amount: payAmount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, (error, result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
  });
  
});

module.exports = router;