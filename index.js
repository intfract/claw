const Scratch = require('scratch-api')
const fs = require('fs')
require('dotenv').config()

const chars = ['etainoshrdlucmfzwygpbvx0123456789', 'etainoshrdlucmfzwygpbvkjxqETAINOSHRDLUCMFZWYGPBVKJXQ0123456789']
const common = [
  'password',
  'password1',
  'password123',
  'scratch',
]

function enter(username, password) {
  Scratch.UserSession.create(username, password, (err, user) => {
    if (err) return console.log(err)
    fs.writeFileSync('out.txt', password)
  })
}

function generate(spread, depth, options, blacklist, callback) {
  const a = []
  for (let n = 0; n < spread ** depth; n++) {
    setTimeout(() => {
      for (let i = 0; i < depth; i++) {
        a[i] = Math.floor((n * spread * spread ** i) / (spread ** depth)) % spread
      }
      console.log(a, n)
    }, n * 1)
  }
}

// generate(chars[0].length, 2, chars[0], common, (x, n) => {})

// enter(process.env.usr, process.env.pwd)