import React from 'react'
import styles from './Reviews.module.css'
import Review from '../../Review'

const Reviews = ({ reviews = [] }) => {
  return (
    <div className={styles.Reviews}>
      {reviews.map(item => {
        return (
          <Review
            name={item.name}
            text={item.text}
            image={item.image}
            key={item.name}
          />
        )
      })}
    </div>
  )
}

export default Reviews
