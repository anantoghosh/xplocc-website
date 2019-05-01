import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import CoursePage from 'components/CoursePage'

const Courses = ({ data }) => (
  <Layout>
    <CoursePage courses={data.allMarkdownRemark.edges} />
  </Layout>
)

export default Courses

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            title
            branch
            slug
            image {
              childImageSharp {
                fixed(width: 300, height: 200, cropFocus: CENTER, quality: 80) {
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

// allFile(filter: { sourceInstanceName: { eq: "courses" } }) {
//   edges {
//     node {
//       name
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid_withWebp_tracedSVG
//         }
//       }
//     }
//   }
// }
