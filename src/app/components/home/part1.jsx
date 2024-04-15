import React from "react"
import Link from "next/link"
import Image from "next/image"
import "@/app/styles/home/part1.css"

const Part1 = () => {
  return (
    <div className="home-background">
        <div className="center-box">
          <h1>Getting Bored?</h1>
          <h4>We are here to provide information about your favourite movies and shows for free while having the best experience of nonstop entertainment without any distractions from unwanted advertisements...</h4>
          <Link href="movie">
            <button>Explore Movies</button>
          </Link>
        </div>
    </div>
  )
}

export default Part1