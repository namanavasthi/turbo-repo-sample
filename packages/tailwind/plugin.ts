const plugin = require("tailwindcss/plugin");

const button = require("./dist/button");

module.exports = plugin(function ({ addComponents }) {
  addComponents(button);
});
