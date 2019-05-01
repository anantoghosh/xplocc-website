import React from 'react'
import styles from './Form.module.css'
import { push } from 'gatsby'

/**
 * @type {string[]}
 */
const ids = []
for (let i = 0; i < 4; i++) {
  ids.push(`__form__${i}_${Math.random()}`)
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: Form.encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => push(form.getAttribute('action')))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className={styles.Form}>
        <h1 className={styles.heading}>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <div className={styles.labelContainer}>
            <label htmlFor={ids[0]} className={styles.label}>
              Your name:
            </label>
          </div>
          <input
            id={ids[0]}
            type="text"
            name="name"
            onChange={this.handleChange}
            required={true}
          />

          <div className={styles.labelContainer}>
            <label htmlFor={ids[1]} className={styles.label}>
              Your email:
            </label>
          </div>
          <input
            id={ids[1]}
            type="email"
            name="email"
            onChange={this.handleChange}
            required={true}
          />

          <div className={styles.labelContainer}>
            <label htmlFor={ids[2]} className={styles.label}>
              Message:
            </label>
          </div>
          <textarea
            id={ids[2]}
            name="message"
            onChange={this.handleChange}
            required={true}
          />

          <button type="submit" className={`${styles.button} button`}>
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default Form
