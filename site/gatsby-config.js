module.exports = {
  siteMetadata: {
    description: "Personal page of Petteri Pucilowski",
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
