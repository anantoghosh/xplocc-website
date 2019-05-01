import React from 'react'
import Obfuscate from 'react-obfuscate'

import Layout from '../components/Layout'
import style from './contact.module.css'

const Contact = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.formContainer}>
          <h2>Contact Form</h2>
          <form
            className={style.form}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="fullname"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={style.hide}>
              <label htmlFor="fullname">Do not fill this</label>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={6} required />
            </div>
            <div className={style.actions}>
              <input type="reset" value="Clear" />
              <input
                type="submit"
                value="Send Message"
                className={style.submit}
              />
            </div>
          </form>
        </div>
        <div className={style.contactInfo}>
          <h2>Contact Info</h2>
          <div className={style.label}>Email</div>
          <Obfuscate email="contact@xplocc.com" />
          <div className={style.label}>Phone</div>
          <Obfuscate tel="(91) 9496057728" />
          <div className={style.label}>Whatsapp</div>
          <Obfuscate href="https://wa.me/919496057728">Click to chat</Obfuscate>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
