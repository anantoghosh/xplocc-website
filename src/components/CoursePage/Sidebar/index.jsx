import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'gatsby'
import { branchesList } from '../../../constants'

/**
 *
 * @param {{active?: string}} [param]
 */
const Sidebar = ({ active }) => {
  return (
    <div className={`${styles.Sidebar} title`}>
      <h3 className={styles.heading}>Branches</h3>
      <ul className={styles.list}>
        <li className={`${styles.item} ${active ? '' : styles.active}`}>
          <Link to={`/courses/`} className={styles.link}>
            All Branches
          </Link>
        </li>
        {branchesList.map(branch => (
          <li
            key={branch.title}
            className={`${styles.item} ${
              active === branch.url ? styles.active : ''
            }`}
          >
            <Link to={`/courses/${branch.url}/`} className={styles.link}>
              {branch.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
