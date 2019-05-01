// @ts-check
const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 */

/**
 * @function
 * @param {{getConfig: function}} param
 */
exports.onCreateWebpackConfig = ({ getConfig }) => {
  /** @type WebpackConfig */
  const config = getConfig()
  if (config.resolve)
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(process.cwd(), 'src/components/'),
      img: path.resolve(process.cwd(), 'src/img/'),
    }
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                branch
                type
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const fm = node.frontmatter
          let url = `/${fm.slug}/`
          if (fm.type === 'course') {
            url = `/courses/${fm.branch}/${fm.slug}/`
          }
          createPage({
            path: url,
            component: path.resolve(`./src/templates/CoursePage/index.jsx`),
            context: {
              slug: fm.slug,
            },
          })
        })

        const branchesList = require(`./src/constants.cjs.js`).branchesList
        branchesList.forEach(branch => {
          createPage({
            path: `/courses/${branch.url}/`,
            component: path.resolve(`./src/templates/BranchPage/index.jsx`),
            context: {
              branch: branch.url,
            },
          })
        })

        resolve()
      })
      .catch(err => console.error(err))
  })
}
