import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/app/styles/movie/card.css'

const card = ({id,title,type,synopsis,backgroundImage}) => {
  return (
    <div className="card-base">
      <Image className="picture" src={backgroundImage} width={250} height={200} />
      <div className="info">
        <h3>{title}</h3>
        <h5>{type}</h5>
        <p>{synopsis}</p>
      </div>
      <Link href={`/movie/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  )
}

export default card