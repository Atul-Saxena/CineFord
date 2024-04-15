import React from 'react'
import  '@/app/styles/header.css'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bar-background">
      <Link href="/">
        <div className="logo">
            <Image src="/logo.png" width={23} height={30}/>
            <span>CineFord</span>
        </div>
      </Link>
        <Navbar/>
    </div>
  )
}

export default Header