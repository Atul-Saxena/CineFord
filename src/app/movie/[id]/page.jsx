import React from 'react'
import Image from 'next/image';
import '@/app/styles/movie/movieInfo.css'

const page = async ({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.KEY,
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  return (
    <div className="movie-info-base">
      <Image className='movie-info-picture' src={data[0].details.backgroundImage.url} height={250} width={200}/>
      <div className="movie-data">
        <h1>{data[0].details.title}</h1>
        <h5>{data[0].details.type} / {data[0].details.releaseYear}</h5>
        <p>Summary: {data[0].details.contextualSynopsis.text}</p>
      </div>
    </div>
  )
}

export default page