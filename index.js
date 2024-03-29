const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

//MIDDLEWARE
//Boby Parser
app.use(bodyParser.json())
//Enable Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
//Tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

//Handle production routing
// if(process.env === 'production') {
//   //if express doesn't recognize route, look in client/build
//   app.use(express.static('client/build')); 

//   //if not in client/build get index.html
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   });
// }

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`RX Life server running on port ${PORT}`)
});