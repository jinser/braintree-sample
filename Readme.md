# Braintree:  Drop-in UI Sample App

Simple sample of Braintree Drop-in UI features following the [tutorial](https://developers.braintreepayments.com/start/tutorial-drop-in-node) available online where the client SDK used is Javascript while the server-side SDK is Node.js. 

This is a single page app with 2 routes (checkout.js and verify.js). 

Try it out here: https://braintree-demo-ui-sample.herokuapp.com/

## Setup and Deployment
Install all dependencies with
`npm install`

To deploy, run:
`npm start` 

Once deployed, go to `http://localhost:3000` .

### Features for testing on this sample application

#### 1) Creating a transaction
Follow the instructions specified in the tutorial to create a successful transaction, taking note that the card expiry needs to be greater or equal to the current month. 

#### 2) Simulating different processor response
Follow the ***Transaction amounts  *** section of the online [documentation](https://developers.braintreepayments.com/reference/general/testing/node) and enter varying amounts in the input field to see the different processor responses. 

#### 3) Testing Unsuccessful Card Verification Response
To conduct this test, follow the ***Card numbers for unsuccessful verification*** section of the online [documentation](https://developers.braintreepayments.com/reference/general/testing/node).
1) Select a test value from the table and enter that into the client UI. 
2) Once ready, click on the button ***Verify Card***.  
3) You should see a Failed status for test values that are meant to fail. 

For successful cases, try out the test values under the ***Valid card numbers*** section of the same document. 
