module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: 'CHANGELOG.md',
      options: {
        printWidth: 120,
        proseWrap: 'always'
      }
    }
  ]
}
