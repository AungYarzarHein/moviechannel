import React, { useContext, useEffect, useState } from 'react';
import icon from "../assets/icon.svg";
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import TrendingMovie from '../components/TrendingMovie';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../components/SearchContext';
import { FadeLoader } from 'react-spinners';




const baseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const fetchOptions = {
  method:"GET",
  headers:{
    accept:"application/json",
    Authorization:`Bearer ${apiKey}`
  }
}




const Home = () => {
      const [loading,setLoading] = useState(true);
      const [movieLoading,setMovieLoading] = useState(true);
      const [movieData,setMovieData] = useState([]);
      const navigate = useNavigate();
      const {searchTerm,setSearchData} = useContext(SearchContext);
      const [searchText, setSearchText] = useState(searchTerm.text);

     




    const fetchMovies = async () => {
        setMovieLoading(true);
        const endpoint = searchText ? `${baseUrl}/search/movie?query=${encodeURIComponent(searchText)}` : `${baseUrl}/discover/movie`;
        try {
            const res = await fetch(endpoint, fetchOptions);
            const data = await res.json();
            // console.log(data.results);
            setMovieData(data.results);
            setLoading(false);
            setMovieLoading(false);
            setSearchData(searchText, data.results);


        } catch (error) {
            console.log("Error occured")
        }
    }

    useEffect(() => {
      
      if(searchTerm.text && searchText == searchTerm.text ){
        setMovieData(searchTerm.data);
        setLoading(false);
        setMovieLoading(false);
        return;
      }
      fetchMovies();
      
    } ,[searchText])

   

    const onMoviePagination = () => {navigate("/pagination")} 


    

    return (
        <div className='container'>
            <div className="headerContainer">
                <img src={icon} className="logo" />
                <span className='headerText' > Movie Channel  </span>
            </div>

            <TrendingMovie />

            <div className="title">
                Endless entertainment begins here
            </div>


            <SearchBar setSearchText={setSearchText} searchText={searchText} />



            <div className="movieCardContainer">
                <div className="btnWrapper">
                    <span className='movieListTitle' > Enjoy Your Time Here </span>
                    <button className='allMovieBtn' onClick={onMoviePagination} > All Movies </button>
                </div>


                {
                    (movieData.length > 0 && !movieLoading) ? (
                        movieData.map(movie => <MovieCard obj={movie} key={movie.id} />)
                    ) : <div className='movieLoading' >  <FadeLoader color='rgb(114, 114, 114)' size={10} /> </div>
                }


                {
                    !movieLoading ? <div className="btnWrapper">
                        <span className='movieListTitle' > Enjoy Your Time Here </span>
                        <button className='allMovieBtn' onClick={onMoviePagination} > All Movies </button>
                    </div> : null
                }
            </div>





            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home