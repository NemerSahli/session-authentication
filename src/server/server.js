const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
  })
);

const auth = (req, res, next) => {
  console.log(req.session.user);
  console.log(req.session.admin);

  if (
    req.session &&
    req.session.user === 'nemer.sahli@gmx.de' &&
    req.session.admin
  ) {
    console.log('wowww....');
    return next();
  } else {
    return res.sendStatus(401);
  }
};

app.get('/', (req, res) => {
  res.send({ data: 'session authentication app.' });
});

app.post('/login', (req, res) => {
  if (req.body.email === 'nemer.sahli@gmx.de' && req.body.password === '123') {
    req.session.user = req.body.email;
    req.session.admin = true;
    console.log(req.session.user);
    console.log(req.session.admin);
    res.send({ error: 0, user: req.body });
  } else {
    res.send({ error: 1000, message: 'login faild' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  return res.send({ error: 0, message: 'logout successfull' });
});

app.get('/items', auth, (req, res) => {
  res.send({ error: 0, message: 'secret area' });
});

console.log('server running on port 8000...');
app.listen(8000);
