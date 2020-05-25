const express = require('express');
const cors = require('cors');
const config = require('../config');
const router = express.Router();

router.use(cors(config.cors));

// this path is used to block replies to requests of unknown origin
router.all('*', (req, res, next) => {

  const origin = req.headers && req.headers.origin;

  if (config.alowedOrigins.indexOf(origin) !== -1) next();
  else res.end();

});

router.get('/', (req, res) => {

  res.json('This is the admin page');

});

router.post('/login', (req, res) => {

  const { LOGIN, PASSWORD } = config.superAdmin;
  const { login, password } = req.body;

  // here should be validation

  if (login === LOGIN && password === PASSWORD) {
    if (!req.session.admin) {
      req.session.admin = true;
      res.json('signed');
    }
    else
      res.json('You are already logged in');
  }
  else
    res.json('login or password is incorrect');

});

router.get('/logout', (req, res) => {

  if (req.session.admin) {
    req.session.admin = null;
    res.json('logged out');
  }
  else
    res.json('You are not logged in');

});

module.exports = router;