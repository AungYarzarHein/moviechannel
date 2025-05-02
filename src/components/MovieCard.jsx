import React from 'react';
import icon from "../assets/icon.svg";

const MovieCard = ({obj}) => {
  const poster = obj.poster_path ? `https://image.tmdb.org/t/p/w500/${obj.poster_path}` : icon
  return (
    <div className="movieCard">
        <img src={poster} alt='Poster' className='posterImg' />
        <span className="movieTitle"> {obj.title} </span>
    </div>
  )
}

export default MovieCard

