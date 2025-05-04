import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import icon from "../assets/icon.svg";
import star from "../assets/star.svg";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const endpoint =  `https://api.themoviedb.org/3/movie/${id}` ;
    const [details , setDetails] = useState(null);
    const [loading,setLoading] = useState(true);
    // const poster = obj.poster_path ? `https://image.tmdb.org/t/p/w500/${obj.poster_path}` : icon ;
   
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
        window.scrollTo(0,0)
        fetchMovieDetails()
     } ,[])


     if(loading) {
        return (
            <div style={{width:"100%",height:"100dvh",paddingTop:"40dvh",textAlign:"center"}} >loading</div>
        )
     }



  return (
    <div className="container">
         <div className="headerContainer">
            <img src={icon} className="logo" />
            <span className='headerText' > Movie Channel  </span>
         </div>



         <div className="contentBody">
            

             <div className="detailsHeader">

                <div className="posterWrapper">
                      <img src={details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.poster_path}` : icon} className='poster' />
                </div>

                <div className="detailsHeaderInfo">
                   <span className="d-title"> {details.title} ({details.release_date.split("-")[0]}) </span>

                   <div style={{paddingBlock:".5rem"}} >
                      <img src={star} className='starIcon' />
                             {details.vote_average}
                    </div>

                   <div className="gen">
                        {
                            details.genres.map(item => <span className='genBtn' key={item.name} > {item.name} </span>)
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

             
             <div style={{maxWidth:"600px",margin:"auto",paddingInline:"1rem"}} >
                  <span className="d-title" > Productions </span>

             </div>
            <div  style={{display:"flex",padding:"1rem",gap:"1rem",flexWrap:"wrap",maxWidth:"600px",margin:"auto"}} >
                
                {
                      details.production_companies.map(item => <span className='genBtn' key={item.name} > {item.name} </span>)
                }
            </div>


              <div className="imageWrapper">
                  <img src={details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.backdrop_path}` : icon} className='backImg' />
              </div>
         </div>
       
    </div>
  )
}

export default MovieDetails