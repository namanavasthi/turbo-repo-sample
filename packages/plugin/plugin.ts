const plugin = require("tailwindcss/plugin");

const button = require("./dist/styled");

module.exports = plugin(function ({ addComponents }) {
  addComponents(button);
});
