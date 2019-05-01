import React from 'react'
import styles from './CourseSummary.module.css'
import Img from 'gatsby-image'

const CourseSummary = ({ title, summary, image }) => {
  return (
    <div className={styles.CourseSummary}>
      <div className={styles.image}>
        <Img fixed={image} />
      </div>
      <h2 className={`${styles.title} title`}>{title}</h2>
      <div className={styles.text}>{summary}</div>
      <div className={styles.button}>KNOW MORE</div>
    </div>
  )
}

export default CourseSummary
