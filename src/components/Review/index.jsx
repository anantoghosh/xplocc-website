import React from 'react'
import styles from './Review.module.css'
import Img from 'gatsby-image'

import quote from 'img/leftquoteblue.svg'

const Review = ({ name, text, image }) => {
  return (
    <div className={`${styles.Review} shadow-8dp`}>
      <div className={styles.text}>{text}</div>
      <div className={styles.qoute}>
        <img src={quote} alt="" width="48px" height="48px" />
      </div>
      <div className={styles.image}>
        <Img fluid={image} />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default Review
