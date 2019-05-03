import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import CoursePage from 'components/CoursePage'
import { isArray } from 'util'

// import styles from './BranchPage.module.css'

const BranchPage = ({ data }) => {
  const courses = data.allMarkdownRemark ? data.allMarkdownRemark.edges : null
  return (
    <Layout>
      {isArray(courses) && courses.length ? (
        <CoursePage
          courses={courses}
          active={courses[0].node.frontmatter.branch}
        />
      ) : (
        'NO DATA'
      )}
    </Layout>
  )
}

export default BranchPage

export const query = graphql`
  query($branch: String!) {
    allMarkdownRemark(filter: { frontmatter: { branch: { eq: $branch } } }) {
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
