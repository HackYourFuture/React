const express = require('express');
const path = require('path');
const app = express();

const source = '../week3/build';

/* We could reach the index.html file here (take the / route) ,
no need to use a GET route that sends the index.html file 
I had it but it was not reached*/
app.use(express.static(path.join(__dirname, source)));

// app.get('/', (request, response) => {
//   response.sendFile(path / index, error => {
//     console.log('I am the get');
//     console.log(error);
//   });
// });

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
