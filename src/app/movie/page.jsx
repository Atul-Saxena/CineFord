import React from 'react'
import Card from '../components/movie/card';
import '@/app/styles/movie/main.css'

const Movie = async () => {
  const url = process.env.URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.KEY,
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div className='movie-basediv'>
      <h1>Movie and Shows</h1>
      <div className="movie-material">
        {
          main_data.map((currElem)=>{
            return (
            <Card key={currElem.jawSummary.id} id={currElem.jawSummary.id} title={currElem.jawSummary.title} type={currElem.jawSummary.type} synopsis={currElem.jawSummary.synopsis} backgroundImage={currElem.jawSummary.backgroundImage.url}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Movie