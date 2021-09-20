const express = require('express');
const port = process.env.PORT;
const cors = require('cors');
const app = express();

//use cors
app.use(cors());
app.use('/', require('./routes/index'));
//start server
app.listen(port, (err) => {
  if (err) {
    console.log('Error encountered while connecting to Server');
    return;
  }
  console.log(`Successfully connected to server at Port ${port}`);
});
