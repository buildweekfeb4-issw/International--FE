const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: 154939824611045457317,
    username: 'johndoe',
    password: 'admin'
  }
];

const generateId = () =>
  `${Date.now()}${Math.floor(Math.random() * 100000000)}`;

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    user => user.username === username && user.password === password
  );

  if (foundUser) {
    res.status(200).json(foundUser.id);
  } else {
    res.json({username, password});
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
