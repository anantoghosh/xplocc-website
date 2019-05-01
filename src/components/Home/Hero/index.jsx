import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styles from './Hero.module.css'

const Hero = ({ ink }) => (
  <div className={styles.Hero}>
    <p className={styles.slogan}>
      <span className={styles.sloganFirst}>
        Just Learning Never makes an engineer
      </span>
      <br />
      <span className={styles.sloganSecond}>Put your concepts to action</span>
    </p>
    <div className={styles.ink}>
      <Img fluid={ink} />
    </div>
    <div className={styles.description}>
      <p className={styles.descriptionText}>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing solely on the bottom
        line.
      </p>
      <div className={styles.action}>
        <Link to="/courses/" className={`button ${styles.button}`}>
          Courses
        </Link>
        <Link to="/workshop/" className={`buttonInverse ${styles.button}`}>
          Workshop
        </Link>
      </div>
    </div>
    <div className={styles.background} />
  </div>
)

export default Hero
