import React,{useState,useEffect} from 'react';
import axios from "axios";
import './banner.css';
// import requests from "./request";
// const aaa="[Math.floor(Math.random()*res.data.results.lenght-1)]";



function Bannerfunc() {

    useEffect(() => {
        const  BannerDataList=async ()=>{
         axios.get("https://api.themoviedb.org/3/discover/tv?api_key=6ee35b76c65a0b39518780dcfb07bcf7&with_networks=213")
            .then(res=>setbanner(res.data.results[Math.floor(Math.random()*res.data.results.length-1)]))
            .catch(err=>(console.log(err)));
        }
        BannerDataList(); 
       },[]);
       const [banner, setbanner] = useState([]);
       console.log(banner);  
       function truncate(str,n){
           return str?.length>n ? str.substring(0,n-1) + "...":str;
       }
      
    
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                backgroundPosition:"center center",
                }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {banner?.title || banner?.name || banner?.original_name }
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
              
               { truncate(banner?.overview,150)}
            </h1>
        </div>
        <div className="banner_fadebottom"></div>

    </header>
    )
}

export default Bannerfunc
