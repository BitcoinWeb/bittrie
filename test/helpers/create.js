const ram = require('random-access-memory')
const bittrie = require('../../')

module.exports = function (key, opts) {
  return module.exports.create(key, opts)
}

module.exports.create = function (key, opts) {
  opts = Object.assign({ valueEncoding: 'json' }, opts)
  return bittrie(ram, key, opts)
}
