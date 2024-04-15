import React from 'react'
import '@/app/styles/contact/upper.css'
// import { AiFillMail } from "react-icons/ai";
// import { BsFillChatSquareTextFill } from "react-icons/bs";
// import { MdForum } from "react-icons/md";
import Link from 'next/link';

const upper = () => {
  return (
    <div className="contact-upper-basediv">
      <div className="contact-hyperlinks">
        {/* <AiFillMail className='contact-icon'/> */}
        <h3>Email</h3>
        <Link href="/contact">Send Email</Link>
      </div>
      <div className="contact-hyperlinks">
        {/* <BsFillChatSquareTextFill className='contact-icon'/> */}
        <h3>Live Chat</h3>
        <Link href="/contact">Chat Now</Link>
      </div>
      <div className="contact-hyperlinks">
        {/* <MdForum className='contact-icon'/> */}
        <h3>Community Forum</h3>
        <Link href="/contact">Ask The Community</Link>
      </div>
    </div>
  )
}

export default upper