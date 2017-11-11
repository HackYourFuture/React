const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

let comments = require('../todo-app/src/comments.json');
let commentNextId = 7;

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Comment API Root');
});

app.get('/comments', function (req, res) {
  res.json(comments);
});

app.post('/comments', function (req, res) {
  const {username, imageType, text} = req.body;

  const newComment = {
    id: commentNextId++,
    username,
    imageType,
    text,
    date: new Date(),
    read: false,
  };

  comments = [...comments, newComment];

  res.json(newComment);
});

app.put('/comments/:id', function (req, res) {
  const commentId = parseInt(req.params.id);
  const {text, read} = req.body;

  let values = {};
  if (text) {
    values = {...values, ...{text}};
  }
  if (read !== undefined) {
    values = {...values, ...{read}};
  }

  comments = comments.map(comment => {
    if (commentId === comment.id) {
      return Object.assign({}, comment, values);
    }
    return comment;
  });

  const updatedComment = comments.filter(comment => comment.id === commentId);

  res.json(updatedComment);
});

app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);

  comments = comments.filter(comment => comment.id !== commentId);

  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('Express listening on port ' + PORT);
});
