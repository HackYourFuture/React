const express = require('express');
const app = express();

app.use(express.json());

app.get('/hey', (req, res) =>
  res.json({
    setps: [
      { number: 1, description: 'Create React App.' },
      { number: 2, description: 'Creat simple NodeJs Express Server.' },
      { number: 3, description: 'Make connection between the both.' },
      {
        number: 4,
        description:
          'Test the connection: send HTTP request from React App, and then recive HTTP respond form Express server, as JSON object.',
      },
    ],
  }),
);

app.listen(8080, () => console.log('The server is listening to: http://localhost:8080/'));
