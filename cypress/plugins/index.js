/* eslint-disable import/no-extraneous-dependencies */
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on) => {
  on('file:preprocessor', cucumber())
}
