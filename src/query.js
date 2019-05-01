module.exports = function(branch) {
  return `query {
    allMarkdownRemark(filter: { frontmatter: { branch: { eq: "${branch}" } } }) {
      totalCount
      edges {
        node {
          id
          excerpt (pruneLength: 300)
          frontmatter {
            title
            branch
            slug
            image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
}
