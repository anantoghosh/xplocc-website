import React from 'react'
import CourseCard from '../../CourseCard'
import styles from './PopularCourses.module.css'
import { Link } from 'gatsby'

/**
 * @typedef {import('types').Courses} Courses
 */

/**
 * @function
 * @param {{courses : Courses}} param
 */
const PopularCourses = ({ courses = [] }) => {
  const courseCards = []
  for (const course of courses) {
    courseCards.push(
      <Link to={course.href} key={course.title}>
        <CourseCard
          title={course.title}
          image={course.image}
          color={course.color}
        />
      </Link>
    )
  }
  return <div className={styles.PopularCourses}>{courseCards}</div>
}

export default PopularCourses
