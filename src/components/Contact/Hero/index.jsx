import React from 'react'
import styles from './Hero.module.css'
import Form from '../Form'
import Map from '../Map'

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Form />
      <Map />
    </div>
  )
}

export default Hero
