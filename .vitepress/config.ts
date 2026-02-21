import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

const site = {
  name: 'Marimuthu Periyannan',
  title: 'Marimuthu Periyannan — Software Product Developer',
  description: '19+ years building enterprise-grade Java systems in banking, aerospace, and beyond.',
  url: 'https://author.kanaksan.com',
}

const resumeBase64 = fs.readFileSync(
  path.resolve(__dirname, '../unsec/resume.pdf')
).toString('base64')

export default defineConfig({
  title: site.name,
  description: `About Me. ${site.name}`,
  lang: 'en-IN',
  base: '/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'canonical', href: site.url }],

    ['meta', { name: 'author', content: site.name }],
    ['meta', { name: 'keywords', content: 'Java, Lead Product Engineer, Spring Boot, Microservices, Banking Analytics, Portfolio' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: site.url }],
    ['meta', { property: 'og:title', content: site.title }],
    ['meta', { property: 'og:description', content: site.description }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: site.title }],
    ['meta', { name: 'twitter:description', content: site.description }],
  ],

  sitemap: {
    hostname: site.url,
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: site.name,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Works', link: '/works/' },
      { text: 'Blog', link: '/blog/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pmarimuthu' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/marisp' },
    ],

    footer: {
      copyright: `© ${new Date().getFullYear()} <a href="https://kanaksan.com">Kanaksan.com</a>`,
    },

    search: {
      provider: 'local',
    },
  },

  vite: {
    define: {
      __RESUME_BASE64__: JSON.stringify(resumeBase64),
    },
  },
})