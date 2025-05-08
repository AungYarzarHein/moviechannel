import React, { useEffect, useRef, useState } from 'react'
import icon from "../assets/icon.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import { BeatLoader, PropagateLoader } from 'react-spinners';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;


const MovieCard = ({obj}) => {
    const poster = obj.poster_path ? `https://image.tmdb.org/t/p/w500/${obj.poster_path}` : icon ;
    return (
        <div className="trendMovieCard">
          <img src={poster} className='trendMovieImg' />
        </div>
    )
}



const TrendingMovie = () => {
    const [movieList , setMovieList] = useState([]);
    const [loading,setLoading] = useState(true);
    const swiperRef = useRef(null);
    const [activeData,setActiveData] = useState({})


    const fetchMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/trending/all/week",{
                method:"GET",
                headers:{
                    accept:"application/json",
                    Authorization:`Bearer ${apiKey}`
                }
            });

            const data = await response.json();
            // console.log(data.results);
            setMovieList(data.results);
            setActiveData({
                title:data.results[1].name || data.results[1].title,
                releaseDate:data.results[1].release_date || data.results[1].first_air_date
            } );

        } catch (error) {
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    
  

    useEffect(() => { 
        // console.log("Trending")
        fetchMovies()
     } ,[]);


     useEffect(()=>{ 
        const swiper = swiperRef.current?.swiper ;
        if(!swiper) return ;

        // setActiveData({
        //     title:movieList[0].name || movieList[0].title,
        //     releaseDate:movieList[0].release_date || movieList[0].first_air_date
        // })

        const updateTitle = () => {
            // console.log(swiper.activeIndex,"fuck")
            
            
            setActiveData({
                title:movieList[swiper.activeIndex].name || movieList[swiper.activeIndex].title,
                releaseDate:movieList[swiper.activeIndex].release_date || movieList[swiper.activeIndex].first_air_date
            } );
            // console.log(movieList[swiper.activeIndex]);
        }

        swiper.on("slideChange",updateTitle);
        return () => swiper.off("slideChange",updateTitle)
      } ,[movieList])




      if(loading) {
       return (
           <div className="trendingMoviesContainer" style={{textAlign:"center",paddingBlock:"4rem"}} >
               <BeatLoader loading color='rgb(36, 233, 255)'  />
           </div>
       )
      }

  return (
    <div className='trendingMoviesContainer' >
        <div className='trendTitle' >
              Trending Movies 
        </div>


        <Swiper spaceBetween={10}  
        ref={swiperRef}
        modules={[Autoplay]} 
        autoplay={{delay:3000}}   
        centeredSlides={true}
        pagination={{clickable:true,dynamicBullets:true}} 
        speed={600}
        initialSlide={1}
        // onSlideChange={item => console.log(item.activeIndex)}
        // slidesPerView={3}
        breakpoints={{
            360:{ slidesPerView:3 },
            480:{ slidesPerView:4 },
            600:{ slidesPerView:5 },
            720:{ slidesPerView:6 },
            840:{slidesPerView:7},
            960:{slidesPerView:8}, 
        }}
          >
            {
                  movieList.length > 0 ? movieList.map(item => <SwiperSlide key={item.id} > <MovieCard obj={item} /> </SwiperSlide>) :  null
            }
        </Swiper>
        
        {
            activeData.title ? <div className="currentActiveData" key={activeData?.title} >
            <span className="activeSlideTitle"  > {activeData.title} ({activeData.releaseDate?.split("-")[0]}) </span>
            {/* <span className='releaseDate'  > ( {activeData.releaseDate} )</span> */}
         </div> : null
        }
    </div>
  )
}

export default TrendingMovie