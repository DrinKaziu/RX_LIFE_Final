const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 4500,
      currency: 'usd',
      description: 'RX Life Challenge',
      source: req.body.id
    });

    req.user.registered = true; 
    const user = await req.user.save();

    res.send(user);
  });
}