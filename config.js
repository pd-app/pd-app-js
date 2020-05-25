// configuration file

const alowedOrigins = ['http://localhost', 'http://localhost:3000'];

const superAdmin = {
  LOGIN: 'admin',
  PASSWORD: 'superadmin'
};

const sessionSettings = {
  name: 'session',
  keys: ['key1', 'key2']
};

const cors = {
  origin: function (origin, callback) {
    if (alowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type']
};

module.exports = {
  alowedOrigins,
  superAdmin,
  sessionSettings,
  cors
};