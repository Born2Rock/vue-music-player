const {loadConfigFromFile, mergeConfig} = require("vite");
const svgLoader = require("vite-svg-loader");
const path = require("path");
//const null
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    //"creevey",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": false //Configures Storybook to load stories on demand, rather than during boot up. - set False to make loki work
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );
    
    
    return mergeConfig(config, {
      ...userConfig,
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `
                @import '../src/pages/mainPage/ui/MainPage.module.scss';
                @import '../src/pages/mainPage/ui/MainPage.module';
              `
          },
        },
      },
      plugins: [
        svgLoader()
      ],
    });
  },
}