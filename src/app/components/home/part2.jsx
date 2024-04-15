import React from 'react'
import "@/app/styles/home/part2.css"
import Image from 'next/image'

const part2 = ({url,text}) => {
  return (
    <div className="basediv">
        <div className="centerbox">
            <div className="image">
                <Image src={url} width={250} height={200}/>
            </div>
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default part2