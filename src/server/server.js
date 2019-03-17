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

app.get('/', (req, res) => {
  res.send({ data: 'session authentication app.' });
});

console.log('server running on port 8000...');
app.listen(8000);
