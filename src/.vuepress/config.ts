import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
