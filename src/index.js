require('dotenv').config();
// process.env.PORT
// process.env.API_KEY

const express = require('express');
const constants = require('./config/constants');
const middlewareConfig = require('./middleware');
const apiEndpoints = require('./endpoints');

const app = express();
middlewareConfig(app);
apiEndpoints(app);

const PORT = constants.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error!');
    throw err;
  } else {
    console.log(`Node server is running on port ${PORT}`);
  }
});

// http.createServer(function(request, response) {
//   const responseData = {
//     status: 'ok!'
//   };
//   response.writeHead(200, {
//     'Content-Type': 'application/json'
//   });
//   response.end(JSON.stringify(responseData));
// }).listen(PORT);

