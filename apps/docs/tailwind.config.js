const tw = require("tailwind").tw;
const CustomPlugin = require("tailwind").CustomPlugin;

console.log("custom Plugin");
console.log(tw);

module.exports = {
  ...tw,
  plugins: [CustomPlugin],
};
