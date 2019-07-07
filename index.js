const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('RX Life')
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`RX Life server running on port ${PORT}`)
})