import React from 'react'
import Img from 'gatsby-image'
import styles from './Quote.module.css'

import quote from 'img/leftquote.svg'

const Quote = ({ name = 'name', image }) => {
  return (
    <div className={styles.Quote}>
      <div className={styles.background} />
      <div className={styles.quote}>
        <img src={quote} alt="" width="100%" />
      </div>
      <div className={styles.image}>
        <Img fluid={image} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, brute abhorreant eloquentiam usu no, nisl
        assum legere usu ei. Et prima atqui nostro mea, alii recusabo eam in.
        Adipiscing incorrupte ex eos, pri velit harum timeam an. Ei odio
        evertitur ius.
      </div>
    </div>
  )
}

export default Quote
