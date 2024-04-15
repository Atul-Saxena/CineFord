"use client"

import React ,{useState}from 'react'
import '@/app/styles/contact/lower.css'
import axios from 'axios'


const lower = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submit = async ()=>{
    try {
      const data = {
        name: name,
        email: email,
        message: message
      }
      const response = await axios.post('/app/api/feedbacks', data);
      console.log(response.data);
    } catch (error) {
        console.log("somethings wrong with submission"+response);
    }
    
  }
  return (
      <form className="contact-lower-basediv">
        <h1>What's Your Opinion</h1>
        <div className="contact-input-field">
          <label htmlFor="name">Enter Your Name:</label><br/>
          <input type="text" id='name' className='contact-input' placeholder='Enter Your Name' onChange={(e)=>setMessage({...message,name:e.target.value})}/>
        </div>

        <div className="contact-input-field">
          <label htmlFor="email">Email:</label><br/>
          <input type="text" id='email' className='contact-input' placeholder='Enter Your email' onChange={(e)=>setMessage({...message,email:e.target.value})}/>
        </div>

        <div className="contact-input-field">
          <label htmlFor="message">Message:</label><br/>
          <input type="text" id='message' className='contact-input' placeholder='Your response' onChange={(e)=>setMessage({...message,message:e.target.value})}/>
        </div>
        
        <button type="submit" onClick={submit}>Submit</button>
      </form>
  )
}

export default lower;