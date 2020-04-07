const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
