import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "博文", icon: "edit", link: "/posts/" },
  { text: "链接", icon: "link", link: "/links" },
  { text: "主题功能演示", icon: "discover", link: "/demo/" },
  { text: "Theme-hope文档 V2", icon: "note", link: "https://theme-hope.vuejs.press/zh/", },
]);
