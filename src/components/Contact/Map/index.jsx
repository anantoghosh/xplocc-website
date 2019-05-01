import React from 'react'
import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.Map}>
      <iframe
        title="Xplocc Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9903111376093!2d80.97441424832236!3d26.872048916736304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4559a3ce67%3A0x6d228e3ac0e7c570!2sXPLOCC+Technologies+-+Lucknow!5e0!3m2!1sen!2sin!4v1445110412443"
        width="400"
        height="300"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
      />
    </div>
  )
}

export default Map
