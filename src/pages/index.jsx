import React from 'react'
import Layout from 'components/Layout'
import {
  Hero,
  PopularCourses,
  Branches,
  Quote,
  Reviews,
  Banner,
} from 'components/Home'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './index.module.css'

/**
 * @type {function}
 * @param {object} param
 */
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Hero ink={data.inkImage.childImageSharp.fluid} />
        <div className={styles.imageContainer}>
          <div className={styles.topImage}>
            <Img
              className={styles.image}
              fluid={data.gridImage.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className={`container`}>
          <h2 className={styles.title}>Popular Courses</h2>
          <PopularCourses
            courses={[
              {
                title: 'Aspen Hysys',
                image: data.aspenhysysImage.childImageSharp.fluid,
                color: 'blue',
                href: '/',
              },
              {
                title: 'Ansys Fluent',
                image: data.ansysfluentImage.childImageSharp.fluid,
                color: 'black',
                href: '/',
              },
              {
                title: 'Matlab',
                image: data.matlabImage.childImageSharp.fluid,
                color: 'red',
                href: '/',
              },
            ]}
          />
        </div>
        <div className={`container`}>
          <h2 className={styles.title}>Courses by Branch</h2>
          <Branches />
        </div>
        <div className={styles.pad}>
          <Quote
            name="Ashish Saroj - Founder"
            image={data.ashishImage.childImageSharp.fluid}
          />
        </div>

        <div className={`container`}>
          <h2 className={styles.title}>What people are saying</h2>
          <Reviews
            reviews={[
              {
                text:
                  "I'm doing MATLAB training from Xplocc Technologies and I must say the course they offer is great. Had grt experience of learning MATLAB here..wonderful platform with brillant faculties..provides proper visualization to problems. Real time learning about the topics. All round development",
                name: 'Radha Patel',
                image: data.ashishImage.childImageSharp.fluid,
              },
              {
                text:
                  "I'm doing MATLAB training from Xplocc Technologies and I must say the course they offer is great. Had grt experience of learning MATLAB here..wonderful platform with brillant faculties..provides proper visualization to problems. Real time learning about the topics. All round development",
                name: 'Laxmi Patel',
                image: data.ashishImage.childImageSharp.fluid,
              },
              {
                text:
                  "I'm doing MATLAB training from Xplocc Technologies and I must say the course they offer is great. Had grt experience of learning MATLAB here..wonderful platform with brillant faculties..provides proper visualization to problems. Real time learning about the topics. All round development",
                name: 'Suresh Patel',
                image: data.ashishImage.childImageSharp.fluid,
              },
            ]}
          />
        </div>
        <div className={styles.pad}>
          <Banner ink={data.inkImage2.childImageSharp.fluid} />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.bottomImage}>
            <Img
              className={styles.image}
              fluid={data.gridImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    inkImage: file(relativePath: { regex: "/ink.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    inkImage2: file(relativePath: { regex: "/ink2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    aspenhysysImage: file(relativePath: { regex: "/aspenhysys.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    ansysfluentImage: file(relativePath: { regex: "/ansysfluent.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    matlabImage: file(relativePath: { regex: "/matlab.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    ashishImage: file(relativePath: { regex: "/ashish.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 370) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    gridImage: file(relativePath: { regex: "/grid.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
