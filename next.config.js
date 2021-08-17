const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withImages = require('next-images')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

const localeSubpaths = {}

module.exports = {
    future: {
      webpack5: true,
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  };