import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
  url: "https://s8lab.com",
  title: "幸ラボ",
  description:
    "教育・健康・暮らしをテーマに、日々の生活や学びに役立つ知識を発信するメディア。",
  author: "Yuika",
  ogImage: "default-og.jpg", // 後で og.png に変更
  lang: "ja",
  timezone: "Asia/Tokyo",
  dir: "ltr",
},
  posts: {
    perPage: 10,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "x",        url: "https://x.com/username" },
    { name: "instagram", url: "https://www.linkedin.com/in/username/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
  ],
});
