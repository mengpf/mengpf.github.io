import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "彼岸星辰beta的博客",
      description: "彼岸星辰beta的博客",
    },
  },

  theme,

  plugins: [
    componentsPlugin({
      components: [
        "ArtPlayer",
        "BiliBili",
        "Share",
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
