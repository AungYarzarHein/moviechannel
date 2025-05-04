import React, { useEffect, useState } from 'react';
import icon from "../assets/icon.svg";
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import TrendingMovie from '../components/TrendingMovie';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';



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
      const [searchText,setSearchText] = useState("");
      const [loading,setLoading] = useState(true);
      const [movieLoading,setMovieLoading] = useState(true);
      const [movieData,setMovieData] = useState([]);
      const navigate = useNavigate();


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

        } catch (error) {
            console.log("Error occured")
        }
    }

    useEffect(() => {
      fetchMovies()
    } ,[searchText])

    const checkSearchText = (text) => { navigate("moviedetails") }



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


            <SearchBar setSearchText={setSearchText} />



            <div className="movieCardContainer">
                <div className="btnWrapper">
                    <span className='movieListTitle' > Enjoy Your Time Here </span>
                    <button className='allMovieBtn' onClick={() => checkSearchText(searchText)} > All Movies </button>
                </div>


                {
                    (movieData.length > 0 && !movieLoading) ? (
                        movieData.map(movie => <MovieCard obj={movie} key={movie.id} />)
                    ) : <span className='movieLoading' > Loading... </span>
                }


                {
                    !movieLoading ? <div className="btnWrapper">
                        <span className='movieListTitle' > Enjoy Your Time Here </span>
                        <button className='allMovieBtn' > All Movies </button>
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