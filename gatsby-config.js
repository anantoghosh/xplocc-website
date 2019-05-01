module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     production: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typed-css-modules`,
      options: {
        EOL: '\n'
      }
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
        path: `${__dirname}/src/courses/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-react-next`,
    // 'gatsby-plugin-preact',
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
    //   resolve: `gatsby-plugin-postcss-sass`,
    //   options: {
    //     postCssPlugins: [autoprefixer()],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-purify-css',
    //   options: {
    //     /* Defaults */
    //     styleId: 'gatsby-inlined-css',
    //     purifyOptions: {
    //       info: true,
    //       minify: true,
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: false
    //   }
    // },
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-netlify',
    // 'gatsby-plugin-size'
  ],
}
