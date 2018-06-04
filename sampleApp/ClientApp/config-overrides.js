// config-overrides.js
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = injectBabelPlugin('babel-plugin-emotion',config)
    return config;
  }