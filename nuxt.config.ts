// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Bishwa shah Portfolio",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        { name: "description", content: "Welcome to Bishwa shah portfolio." },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
        { name: "twitter:title", content: "Bishwa shah Portfolio" },
        {
          name: "twitter:description",
          content: "Welcome to Bishwa shah portfolio.",
        },
        {
          name: "twitter:image",
          content: process.env.URL + "/images/logo.jpg",
        },
        { property: "og:type", content: "profile" },
        { property: "og:title", content: "Bishwa shah Portfolio" },
        {
          property: "og:description",
          content: "Welcome to Bishwa shah portfolio.",
        },
        { property: "og:url", content: process.env.URL },
        { property: "og:image", content: process.env.URL + "/images/logo.jpg" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "316x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
});
