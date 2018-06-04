const path = require("path");
const {
    injectBabelPlugin
} = require('react-app-rewired');

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.

    // For example, add typescript loader:
    //   defaultConfig.module.rules.push({
    //     test: /\.(ts|tsx)$/,
    //     include: path.resolve(__dirname, "../src"),
    //     loader: require.resolve("ts-loader")
    //   });
    //   defaultConfig.resolve.extensions.push(".ts", ".tsx");
    defaultConfig = injectBabelPlugin('babel-plugin-emotion', defaultConfig)
    return defaultConfig;
};