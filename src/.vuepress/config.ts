import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "彼岸星辰beta的Blog",
      description: "一个有点懒，又没有毅力的人，开始了新一轮的碎碎念。",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
