import React,{useState,useEffect} from 'react';
// import AxiosRequest from "./axiosrequest";
import axios from "axios";
import './Row_styles.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,islargeRow}) 
{
   useEffect(() => {
    const  fetchDataList=async ()=>{
        axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
        .then(res=>{setMovies(res.data.results)})
        .catch(err=>{console.log(err)}); 
    }
    fetchDataList(); 
   },[fetchUrl]);
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");
   console.log(movies)

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick=(res)=>{
    if(trailerUrl){
        setTrailerUrl("");
    }
    else{
        movieTrailer(res?.name || "")
        .then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((error)=>console.log(error));
    }
  }

return (
    <React.Fragment>
        <div className="row">
             <h1>{title}</h1>
             <div className="row_posters"> 
                 {movies.map((res)=>(
                     <img key={res.id} onClick={()=>handleClick(res)} className={`row_poster ${islargeRow && "row_posterLarge"}`} 
                     src={`${base_url}${islargeRow ? res.poster_path:res.backdrop_path}`} 
                     alt={res.name}/>
                     
                 ))}
             </div>
             {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    </React.Fragment>    
       
    )

}
export default Row;