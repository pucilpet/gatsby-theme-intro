module.exports = {
  siteMetadata: {
    description: "Page of Petteri Pucilowski",
    locale: "en",
    title: "Petteri Pucilowski",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "blue",
      },
    },
  ],
}
