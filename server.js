require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { join } = require('path');
const { sequelize } = require('./models/User');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600,
    httpOnly: true, 
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

async function init() {
  await require('./config').sync()
  app.listen(process.env.PORT || 3000)
}

init()

