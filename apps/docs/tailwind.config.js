const tw = require("tailwind").tw;
const CustomPlugin = require("plugin").CustomPlugin;

module.exports = {
  ...tw,
  content: ["**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [CustomPlugin],
};
