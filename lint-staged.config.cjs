module.exports = {
  'lib/**/*.ts': [
    'yarn lint:fix',
    'yarm prettier:format',
    'yarn test:unit -- --findRelatedTests',
    'yarn library:build'
  ],
  'test/unit/**/*.ts': ['yarn test:unit -- --findRelatedTests'],
  'test/integration/**/*.ts': ['yarn test:integration -- --findRelatedTests']
}
