import express from 'express';
import basicAuth from 'express-basic-auth';
import crypto from 'crypto';
import 'dotenv/config';

const app = express();

// Make sure that there are no emails sent around if the API is publicly available.
app.use(basicAuth({
  users: {
    'geo': ('PASSWORD' in process.env) ? process.env.PASSWORD : crypto.randomBytes(42).toString('hex')
  },
  challenge: true,
}));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/ouch', (req, res) => {
  throw new Error('Big badaboom!');
});

app.listen(process.env.PORT, () =>
  console.log(`Hello API listening on port ${process.env.PORT}!`),
);
