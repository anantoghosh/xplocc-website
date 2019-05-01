import React from 'react'
import { Link } from 'gatsby'

import styles from './Navigation.module.css'
import Logo from 'img/xplocc_logo_white.svg'
import fb from 'img/fb.svg'
import twitter from 'img/twitter.svg'

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="" />
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/courses/">COURSES</Link>
        </li>
        <li>
          <Link to="/workshop/">WORKSHOP</Link>
        </li>
        <li>
          <Link to="/about/">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact/">CONTACT</Link>
        </li>
      </ul>
      <ul className={styles.social}>
        <li>
          <a
            href="https://www.facebook.com/xplocc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.icon} src={fb} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/xplocc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.icon} src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
