import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styles from './Banner.module.css'

const Banner = ({ ink }) => (
  <div className={styles.Banner}>
    <div className={`title ${styles.title}`}>Learn through Experience</div>
    <div className={styles.inkContainer}>
      <Img fluid={ink} className={styles.ink} />
    </div>
    <Link className={`button ${styles.button}`} to="/courses/">
      View All Courses
    </Link>
  </div>
)

export default Banner
