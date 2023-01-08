const Scratch = require('scratch-api')
require('dotenv').config

function enter(username, password) {
  Scratch.UserSession.create(username, password, (err, uesr) => {})
}