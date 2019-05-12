import React from 'react'
import { Link } from 'gatsby'
import styles from './Branches.module.css'

import { branchesList } from '../../../constants'

const Branches = () => {
  return (
    <div className={styles.Branches}>
      <div className={`${styles.titleBlock} title`}>
        <h3 className={styles.title}>
          Find the course you are most interested in
        </h3>
      </div>
      <div className={styles.left}>
        {branchesList.slice(0, 6).map(branch => {
          return (
            <Link
              className={`${styles.color1} ${styles.linkReverse} title`}
              key={branch.url}
              to={`/courses/${branch.url}/`}
            >
              {branch.title}
            </Link>
          )
        })}
      </div>
      <div className={styles.right}>
        {branchesList.slice(6, 12).map(branch => {
          return (
            <Link
              className={`${styles.link} ${styles.color1} title`}
              key={branch.url}
              to={`/courses/${branch.url}/`}
            >
              {branch.title}
            </Link>
          )
        })}
      </div>
      {/* <Link
        className={`${styles.link} ${styles.color1} title`}
        to="/courses/chemical-engineering/"
      >
        Chemical
      </Link>
      <Link
        className={`${styles.link} ${styles.color2} title`}
        to="/courses/mechanical-engineering/"
      >
        Mechanical
      </Link>
      <Link
        className={`${styles.link} ${styles.color3} title`}
        to="/courses/electrical-engineering/"
      >
        Electrical
      </Link>
      <Link
        className={`${styles.link} ${styles.color4} title`}
        to="/courses/civil-engineering/"
      >
        Civil
      </Link>
      <Link
        className={`${styles.link} ${styles.color5} title`}
        to="/courses/computer-science/"
      >
        CS/IT
      </Link>
      <Link
        className={`${styles.link} ${styles.color5} title`}
        to="/courses/architecture/"
      >
        Architecture
      </Link>
      <Link
        className={`${styles.link} ${styles.color5} title`}
        to="/courses/techno-mathematics/"
      >
        Techno Math
      </Link>
      <Link
        className={`${styles.link} ${styles.color5} title`}
        to="/courses/piping-engineering/"
      >
        Piping
      </Link> */}
    </div>
  )
}

export default Branches
