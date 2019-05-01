import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './CoursePage.module.css'

const CoursePage = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.content}>
            <h1>{post.frontmatter.title}</h1>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
        <div className={styles.sidebar}>
          <a href="#" className={styles.button}>
            I am interested
          </a>
          <Img
            className={styles.image}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default CoursePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        branch
        slug
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
