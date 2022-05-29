const unit = require('./jest.unit.config')
const _ = require('lodash')

/**
 * Sets up test runner configuration for Jest.
 *
 * @returns {object} A Jest configuration.
 */
module.exports = () => {
  const base = unit()
  return _.merge(_.cloneDeep(base), {
    coverageReporters: ['text', ['lcov', { file: 'lcov-unit.info' }]],
    testLocationInResults: true,
    reporters: ['jest-silent-reporter'],
    silent: true
  })
}
