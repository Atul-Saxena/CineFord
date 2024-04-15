"use client"
import {RingLoader} from 'react-spinners';

const loading = () => {
  return (
    <div className="loader">
      <RingLoader
        height = "80"
        width = "80"
        radius = "9"
        color="#7697e8" />
    </div>
  )
}

export default loading