import React from 'react'
import Link from 'next/link'
import  '@/app/styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/movie">Movies</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar