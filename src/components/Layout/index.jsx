import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Footer'
import Navigation from '../Navigation'
import '../../global/normalize.css'
import '../../global/fonts.css'
import '../../global/main.css'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet
      title="Xplocc Technologies"
      meta={[{ name: 'description', content: 'Xplocc Technologies' }]}
    />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default TemplateWrapper
