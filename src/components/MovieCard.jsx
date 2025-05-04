import React from 'react';
import icon from "../assets/icon.svg";
import star from "../assets/star.svg";
import { useNavigate } from 'react-router-dom';


const MovieCard = ({obj}) => {
  // console.log(obj)
  const poster = obj.poster_path ? `https://image.tmdb.org/t/p/w500/${obj.poster_path}` : icon ;
  const navigate = useNavigate();

  return (
    <div className="movieCard" onClick={() => navigate(`/moviedetails/${obj.id}`)} >
        <img src={poster} alt='Poster' className='posterImg' />
        <span className="movieTitle"> {obj.title} </span>

        <div className="rating">
          <img src={star} className='starIcon' />
          {obj.vote_average}
        </div>
    </div>
  )
}

export default MovieCard

