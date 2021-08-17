const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withImages = require('next-images')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

const localeSubpaths = {}

module.exports = {
    webpack5: false,
  }
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false
  }