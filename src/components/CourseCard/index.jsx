import React from 'react'
import Img from 'gatsby-image'
import styles from './CourseCard.module.css'

const CourseCard = ({ title, image, color = 'black' }) => {
  return (
    <div className={`shadow-12dp shadow-transition ${styles.CourseCard}`}>
      <div className={`${styles.titleContainer} ${styles[color]}`}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <Img className={styles.image} fluid={image} />
      {/* <div className={styles.shapePadding}></div> */}
    </div>
  )
}

export default CourseCard
