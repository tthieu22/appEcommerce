const path = require("path");

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Các quy tắc khác của Webpack...
    ],
  },
  ignoreWarnings: [
    {
      module: /node_modules\/@antv\/util/,
      message: /Failed to parse source map/,
    },
  ],
  // Các cấu hình khác của Webpack...
};
