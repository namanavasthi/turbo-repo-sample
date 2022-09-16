const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "button",
            replacement: path.resolve(__dirname, "../../../packages/button/"),
          },
          {
            find: "text",
            replacement: path.resolve(__dirname, "../../../packages/text/"),
          },
        ],
      },
    };
  },
};
