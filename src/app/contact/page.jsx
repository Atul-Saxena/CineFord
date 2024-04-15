import React from 'react'
import Upper from '@/app/components/contact/upper'
import Lower from '@/app/components/contact/lower'
import '@/app/styles/contact/main.css'

const Contact = () => {
  return (
    <div className="contact-base-div">
      <h1>Contact Us</h1>
      <Upper/>
      <Lower />
    </div>
  )
}

export default Contact