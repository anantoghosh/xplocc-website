import React from 'react'
import { Link } from 'gatsby'
import CourseSummary from '../CourseSummary'
import Sidebar from './Sidebar'
import styles from './CoursePage.module.css'

/**
 * @typedef {{node: {id: string; excerpt: string; frontmatter: { branch: string; slug: string; title: string; image: {childImageSharp: { fluid: string; fixed: string;}}}}}[]} Courses
 * @param {{courses: Courses; active?: string}} param
 */
const CoursePage = ({ courses, active }) => {
  return (
    <div className={styles.CoursePage}>
      <div className={styles.sidebar}>
        <Sidebar active={active} />
      </div>
      <div className={styles.content}>
        {courses.map(({ node }) => (
          <Link
            key={node.id}
            to={`/courses/${node.frontmatter.branch}/${node.frontmatter.slug}/`}
          >
            <CourseSummary
              title={node.frontmatter.title}
              summary={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fixed}
            />
          </Link>
        ))}
      </div>
      <div className={styles.sideHeaderContainer}>
        <div className={`${styles.title} title`}>
          {active || 'All Branches'}
        </div>
      </div>
    </div>
  )
}

export default CoursePage
