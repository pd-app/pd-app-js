const express = require('express');
const cookieSession = require('cookie-session');
const sessionSettings = require('./config').sessionSettings;

const index = require('./routes/index');
const admin = require('./routes/admin');

const app = express();

app.set('x-powered-by', false);
// app.set('etag', false);

app.use(cookieSession(sessionSettings));
app.use(express.json());
app.use('/', index);
app.use('/admin', admin);


const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`pd-app listening at http://localhost:${port}`);
});