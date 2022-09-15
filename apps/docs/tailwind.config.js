const tw = require("tailwind").tw;
const CustomPlugin = require("tailwind").CustomPlugin;

console.log("custom Plugin");
console.log(CustomPlugin);

module.exports = {
  ...tw,
  content: ["./stories/**.mdx"],
  plugins: [CustomPlugin],
};
