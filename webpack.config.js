const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist/assets/js"),
    filename: "main.js"
  }
};