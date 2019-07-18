const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({error: 'You must first signin/signup'});
    }
    
    const charge = await stripe.charges.create({
      amount: 4500,
      currency: 'usd',
      description: 'RX Life Challenge',
      source: req.body.id
    });

    req.user.registered = true; 
    const user = await req.user.save();

    res.send (user)
  });
}