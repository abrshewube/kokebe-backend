// webpack.config.js

module.exports = {
    // other webpack configurations...
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
      },
    },
  };
  