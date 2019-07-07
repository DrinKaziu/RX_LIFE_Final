const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`RX Life server running on port ${PORT}`)
});