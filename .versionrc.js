module.exports = {
  skip: {
    commit: true,
    tag: true
  },
  types: [
    {
      type: 'feat',
      section: 'Features'
    },
    {
      type: 'fix',
      section: 'Bug Fixes'
    },
    {
      type: 'docs',
      section: 'Documentation'
    },
    {
      type: 'perf',
      section: 'Performance Improvements'
    }
  ],
  scripts: {
    postchangelog: './scripts/postchangelog.sh'
  }
}
