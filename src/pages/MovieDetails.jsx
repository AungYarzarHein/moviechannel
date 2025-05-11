import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import icon from "../assets/icon.svg";
import star from "../assets/star.svg";
import StarRating from '../components/StarRating';
import { SearchContext } from '../components/SearchContext';
import { BeatLoader, FadeLoader } from 'react-spinners';
import DownloadOptions from '../components/DownloadOptions';



const apiKey = import.meta.env.VITE_TMDB_API_KEY;


const MovieDetails = () => {
    const { id } = useParams();
    const endpoint =  `https://api.themoviedb.org/3/movie/${id}` ;
    const [details , setDetails] = useState(null);
    const [loading,setLoading] = useState(true);
    // const poster = obj.poster_path ? `https://image.tmdb.org/t/p/w500/${obj.poster_path}` : icon ;
    const {searchTerm} = useContext(SearchContext);
    const navigate = useNavigate();

   
    // console.log(id);

    const fetchMovieDetails = async () => {
        try {
           const response = await fetch(endpoint,{
                method:"GET",
                headers:{
                    accept: "application/json" ,
                    Authorization:`Bearer ${apiKey}`
                }
            });

            const data = await response.json();
            setDetails(data);
            // console.log(data);
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => { ;
        window.scrollTo(0,0);
        // console.log(searchTerm)
        fetchMovieDetails()
     } ,[])


     if(loading) {
        return (
            <div style={{ width: "100%", height: "100dvh",display:"flex",justifyContent:"center",alignItems:"flex-start",paddingTop:"30dvh"}} > <BeatLoader color='rgb(79, 80, 81)' size={10} /> </div>
        )
     }



  return (
    <div className="container">
         <div className="headerContainer">
            <img src={icon} className="logo" />
            <span className='headerText' onClick={()=>navigate("/")} > Movie Channel  </span>
         </div>



         <div className="contentBody">
            

             <div className="detailsHeader">

                <div className="posterWrapper">
                      <img src={details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.poster_path}` : icon} className='poster' />
                </div>

                <div className="detailsHeaderInfo">
                   <span className="d-title"> {details.title} ({details.release_date.split("-")[0]}) </span>
                    <StarRating rating={details.vote_average} />

                      <div style={{ paddingBlock: ".5rem",fontSize:".8rem" }} >
                          {/* <img src={star} className='starIcon' /> */}
                          <span >Rating : </span>
                          {details.vote_average}
                      </div>

                   <div className="gen">
                        {
                            details.genres.map(item => <button className='genBtn' key={item.name} > {item.name} </button>)
                        }
                   </div>
                </div>
             </div>

            <div className="d-text">
                <div className="d-title">Overview</div>

                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  <p>{details.overview}</p>
                  
            </div>

             
              <div className='d-text' >
                  <span className="d-title" > Productions </span>

             </div>
            <div  style={{display:"flex",padding:"1rem",gap:".5rem",flexWrap:"wrap",maxWidth:"600px",margin:"auto"}} >
                
                {
                      details.production_companies.map(item => <button className='genBtn' key={item.name} > {item.name} </button>)
                }
            </div>



             
             <DownloadOptions />
             

              <div className="imageWrapper">
                  <img src={details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.backdrop_path}` : icon} className='backImg' />
              </div>


         </div>


         
       
    </div>
  )
}

export default MovieDetails