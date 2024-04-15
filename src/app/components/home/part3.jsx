import React from 'react'
import "@/app/styles/home/part2.css"
import Image from 'next/image'

const part3 = ({url,text}) => {
  return (
    <div className="basediv">
        <div className="centerbox">
            <h2>{text}</h2>
            <div className="image">
                <Image src={url} width={250} height={200}/>
            </div>
        </div>
    </div>
  )
}

export default part3