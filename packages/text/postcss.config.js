module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
