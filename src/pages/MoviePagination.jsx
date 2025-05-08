import React, { useContext, useEffect, useState } from 'react';
import icon from "../assets/icon.svg";
import MovieCard from '../components/MovieCard';
import { BeatLoader, FadeLoader } from 'react-spinners';
import { IoChevronForwardSharp , IoChevronBackSharp } from "react-icons/io5";
import { SearchContext } from '../components/SearchContext';
import Footer from '../components/Footer';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const Pagination = () => {
      const [movieLoading,setMovieLoading] = useState(true);
      const [movieData,setMovieData] = useState([]);
      const { searchTerm, setPage } = useContext(SearchContext);
      const [pageNum, setPageNum] = useState(searchTerm.page);




  const fetchMovies = async () => {
    setMovieLoading(true);
    const endpoint = `https://api.themoviedb.org/3/movie/popular?page=${pageNum}`;
    try {
      const res = await fetch(endpoint, {method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${apiKey}`}});
      const data = await res.json();
      // console.log(data.results);
      setMovieData(data.results);
      // setLoading(false);
      setMovieLoading(false);
      setPageNum(pageNum);
      setPage(pageNum,data.results);
      // console.log(data.results);
      // setSearchData(searchText, data.results);


    } catch (error) {
      console.log("Error occured")
    }
  }


  useEffect(()=>{ 

    fetchMovies()
   } ,[pageNum])


   const onPrevPage = () => { 
    if(pageNum <= 1 ) return ;
    setPageNum(prev => prev -1)
    }

    const onNextPage = () => {
      if(pageNum >= 20) return ;
      setPageNum(prev => prev +1)
    }



  return (
    <div className="container">
      <div className="headerContainer">
        <img src={icon} className="logo" />
        <span className='headerText' > Movie Channel  </span>
      </div>

      <div className="movieCardContainer" >

        <div className="p-btnContainer">
          <button className='p-btn' onClick={onPrevPage}  > <IoChevronBackSharp /> Previous  </button>

          <button className='p-btn' onClick={onNextPage}  > Next <IoChevronForwardSharp /> </button>
        </div>



        {
          (movieData.length > 0 && !movieLoading) ? (
            movieData.map(movie => <MovieCard obj={movie} key={movie.id} />)
          ) : <div className='movieLoading' >  <BeatLoader  color='rgb(114, 114, 114)' className='loadingIcon' /> </div>
        }


       {
          movieLoading ? null : <div className="p-btnContainer">
            <button className='p-btn' onClick={onPrevPage}  > <IoChevronBackSharp /> Previous  </button>

            <button className='p-btn' onClick={onNextPage}  > Next <IoChevronForwardSharp /> </button>
          </div>
       }
      </div>



      
    </div>
  )
}

export default Pagination