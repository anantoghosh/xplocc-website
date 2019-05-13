module.exports = {
  siteMetadata: {
    title: 'Xplocc Technologies',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typed-css-modules`,
      options: {
        EOL: '\n',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `courses`,
        path: `${__dirname}/src/img/courses/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/courses/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: false
    //   }
    // },
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-netlify',
    'gatsby-plugin-size',
  ],
}
