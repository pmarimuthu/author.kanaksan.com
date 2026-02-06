import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Marimuthu Periyannan",
  description:
    "About Marimuthu Periyannan, a Lead Product Engineer with 19+ years of experience building enterprise-grade Java systems in banking, aerospace, and beyond.",
  lang: "en-IN",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Marimuthu Periyannan" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java, Lead Product Engineer, Spring Boot, Microservices, Banking Analytics, Portfolio",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Marimuthu Periyannan — Lead Product Engineer",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "19+ years building enterprise-grade Java systems in banking, aerospace, and beyond.",
      },
    ],
    ["meta", { property: "og:url", content: "https://author.kanaksan.com" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Marimuthu Periyannan — Lead Product Engineer",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content: "19+ years building enterprise-grade Java systems.",
      },
    ],
    ["link", { rel: "canonical", href: "https://author.kanaksan.com" }],
  ],

  sitemap: {
    hostname: "https://author.kanaksan.com",
  },

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Marimuthu Periyannan",

    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Works", link: "/works/" },
      { text: "Blog", link: "/blog/" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pmarimuthu" },
      { icon: "linkedin", link: "https://linkedin.com/in/marisp" },
    ],

    footer: {
      copyright: `© ${new Date().getFullYear()} <a href="https://kanaksan.com">Kanaksan.com</a>`,
    },

    search: {
      provider: "local",
    },
  },
});
