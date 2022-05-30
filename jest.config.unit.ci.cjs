/**
 * Sets up test runner configuration for Jest.
 *
 * @returns {object} A Jest configuration.
 */
module.exports = () => ({
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/test/unit/**/*.test.[jt]s?(x)'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.ts'],
  testLocationInResults: true,
  coveragePathIgnorePatterns: ['/.yarn/', 'index.ts', '\\.+\\.d\\.ts'],
  coverageReporters: ['text', ['lcov', { file: 'lcov-unit.info' }]],
  verbose: true,
  reporters: ['jest-silent-reporter'],
  silent: true
})
