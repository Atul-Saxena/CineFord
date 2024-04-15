import React from 'react'
import '@/app/styles/footer.css'
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillMail } from "react-icons/ai";
// import { AiFillFacebook } from "react-icons/ai";
// import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-basediv">
      <div className="div1">
        <h2>CineFord</h2>
        {/* <div className="icons">
          <Link href="https://www.instagram.com/"><AiFillInstagram className='icon'/></Link>
          <Link href="https://www.facebook.com/"><AiFillFacebook className='icon'/></Link>
          <Link href="https://twitter.com/i/flow/login"><AiFillTwitterCircle className='icon'/></Link>
          <Link href="https://mail.google.com/"><AiFillMail className='icon'/></Link>
        </div> */}
      </div>
      <div className="div2">
        <div className="features">
          <h3>Company</h3>
          <h5>Home</h5>
          <h5>Contact Us</h5>
          <h5>About Us</h5>
          <h5>Get Started</h5>
        </div>
        <div className="features">
          <h3>Services</h3>
          <h5>App Design</h5>
          <h5>Web Design</h5>
          <h5>Logo Design</h5>
          <h5>Bonner Design</h5>
        </div>
        <div className="features">
          <h3>Account</h3>
          <h5>Profile</h5>
          <h5>My Account</h5>
          <h5>Preferences</h5>
          <h5>Purchase</h5>
        </div>
      </div>
      <div className="div3">
        <h6>Copyright@2023Atul-Saxena</h6>
        <h6>Privacy policy,Terms and Conditions</h6>
      </div>
    </div>
  )
}

export default Footer