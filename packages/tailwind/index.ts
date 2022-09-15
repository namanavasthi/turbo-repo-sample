const tw = require("./tailwind.config.js");

const plugin = require("./plugin");

console.log("plugin");
console.log(plugin);

export { tw };
export { TW } from "./types";
export { colors } from "./colors";
export { plugin as CustomPlugin };
