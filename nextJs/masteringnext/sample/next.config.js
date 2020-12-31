const withMDX = require('@next/mdx')()

module.exports = withMDX({
  // Tell teh plugin what file extensions to look for
  pageExtensions: ['js', 'mdx']
})
