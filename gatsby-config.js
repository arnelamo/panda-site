module.exports = {
  siteMetadata: {
    title: "Sigrid og Pappas Pandaside",
    description: "A site about Pandas",
    author: "Arne Pedersen"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sigrid & Pappas Dyrevideoer`,
        short_name: `Sigrid & Pappa`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#37bdbf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}