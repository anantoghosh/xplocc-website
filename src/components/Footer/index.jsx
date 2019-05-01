import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'gatsby'
import { branchesList } from '../../constants'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.contact}>
        <h5 className={styles.heading}>Contact us</h5>
        <a href="tel:+919496057728" className={`${styles.link} ${styles.item}`}>
          +91-9496057728
        </a>
        <a
          href="mailto:contact@xplocc.com"
          className={`${styles.link} ${styles.item}`}
        >
          contact@xplocc.com
        </a>
      </div>
      <div className={''}>
        <h5 className={styles.heading}>Pages</h5>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/courses/" className={styles.link}>
              Courses
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/workshop/" className={styles.link}>
              Workshop
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/about/" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact/" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={''}>
        <h5 className={styles.heading}>Branches</h5>
        {branchesList.map(branch => (
          <Link
            key={branch.url}
            to={`/courses/${branch.url}`}
            className={`${styles.link} ${styles.item}`}
          >
            {branch.title}
          </Link>
        ))}
      </div>
      <div className={''}>
        <h5 className={styles.heading}>Social</h5>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="https://www.facebook.com/xplocc/" className={styles.link}>
              Facebook
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://twitter.com/xplocc/" className={styles.link}>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
