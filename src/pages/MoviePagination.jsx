import React, { useContext, useEffect, useState } from 'react';
import icon from "../assets/icon.svg";
import MovieCard from '../components/MovieCard';
import { BeatLoader, FadeLoader } from 'react-spinners';
import { IoChevronForwardSharp , IoChevronBackSharp } from "react-icons/io5";
import { SearchContext } from '../components/SearchContext';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import DropdownSelector from '../components/DropdownSelector';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const endpoints = {
  popular:"https://api.themoviedb.org/3/movie/popular?page=",
  action: "https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&page=",
  adventure: "https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=popularity.desc&page=",
  animation: "https://api.themoviedb.org/3/discover/movie?with_genres=16&sort_by=popularity.desc&page=",
  adult:"https://api.themoviedb.org/3/search/movie?query=sex&include_adult=true&page=",
  comedy:"https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&page=",
  horror:"https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&page=",
  drama:"https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&page="
}

const Pagination = () => {
      const [movieLoading,setMovieLoading] = useState(true);
      const [movieData,setMovieData] = useState([]);
      const { searchTerm, setPage } = useContext(SearchContext);
      const [pageNum, setPageNum] = useState(searchTerm.page);
      const [filterText,setFilterText] = useState(searchTerm.category);
      const navigate = useNavigate();




  const fetchMovies = async () => {
    setMovieLoading(true);
    
    const endpoint = `${endpoints[filterText]}${pageNum}`;
    // const endpoint = `https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&page=${pageNum}`;
    console.log(endpoint)
    try {
      const res = await fetch(endpoint, {method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${apiKey}`}});
      const data = await res.json();
      // console.log(data.results);
      setMovieData(data.results);
      // setLoading(false);
      setMovieLoading(false);
      setPageNum(pageNum);
      const obj = {
        page:pageNum,
        pageData:data.results,
        category:filterText
      }
      console.log(obj);
      setPage(obj);
      // setPage(pageNum,data.results,filterText);
      // console.log(data.results);
      // setSearchData(searchText, data.results);


    } catch (error) {
      console.log("Error occured")
    }
  }


  useEffect(()=>{ 
    // console.log("Fetching",searchTerm)
    fetchMovies();
    // setPage(pageNum, movieData, filterText);
   } ,[pageNum,filterText])

   const setFilter = (text) => {
    setFilterText(text);
    setPageNum(1)
   }


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
        <span className='headerText' onClick={()=>navigate("/")} > Movie Channel  </span>
      </div>

      <DropdownSelector setFilter={setFilter}  />

      <div className="movieCardContainer" >

        <div className="p-btnContainer">
          <button className='p-btn' onClick={onPrevPage}  > <IoChevronBackSharp /> Prev  </button>
          <button className='p-pageNum'   > Page -   {pageNum}  </button>
          <button className='p-btn' onClick={onNextPage}  > Next <IoChevronForwardSharp /> </button>
        </div>



        {
          (movieData.length > 0 && !movieLoading) ? (
            movieData.map(movie => <MovieCard obj={movie} key={movie.id} />)
          ) : <div className='movieLoading' >  <BeatLoader  color='rgb(114, 114, 114)' size={10} className='loadingIcon' /> </div>
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