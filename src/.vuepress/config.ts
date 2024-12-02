import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description:
        "The official documentation for the aklivity/zillabase open-source project",
    },
  },

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
