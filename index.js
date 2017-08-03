'use strict'
const logger = require('pnpm-logger')
const install = require('supi').install
const path = require('path')

install({prefix: path.join(__dirname, 'project')})
  .then(() => console.log('done'))
  .catch(err => console.error(err))
