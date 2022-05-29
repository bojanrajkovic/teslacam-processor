/**
 * Sets up test runner configuration for Jest.
 *
 * @returns {object} A Jest configuration.
 */
module.exports = () => {
  return {
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testMatch: ['**/test/unit/**/*.test.[jt]s?(x)'],
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['lib/**/*.ts'],
    coveragePathIgnorePatterns: ['/.yarn/', 'index.ts', '\\.+\\.d\\.ts'],
    coverageReporters: ['text'],
    verbose: true
  }
}
