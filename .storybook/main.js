module.exports = {
  previewHead: (head) => `
    ${head}
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
      body {
        font-family: 'Poppins', san-serif;
      }
    </style>
  `,
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
