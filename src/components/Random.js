import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
    const [gif, setGif] = useState("");
    const [loader,setLoader] = useState(false);
    
    async function fetchData(){
      setLoader(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const output = await axios.get(url);
      console.log(output); 
      const fetchedGif = output.data.data.images.downsized.url;   
      setGif(fetchedGif);
      setLoader(false);
    }

    useEffect(()=>{
      fetchData();
    },[]);
    
    function clickHandler(){
        fetchData();
    }
  return (
    <div className='bg-green-500 w-full lg:h-[700px] sm:h-[500px] flex flex-col justify-item-stretch items-center rounded-lg gap-10 p-10'>
        <h2 className='uppercase text-2xl underline font-bold p-5 '>A Random Gif</h2>
        {
          loader ? (<Spinner/>) : (<img className='object-cover lg:h-[350px] sm:h-[200px] w-[350px]' alt="img1" src={gif} width="450px"></img>)
        }

        <button onClick={clickHandler} className= 'bg-white w-10/12 p-2 font-bold rounded-md text-lg uppercase opacity-80 hover:opacity-100 transition-all duration-200'>Generate</button>
    </div>
  )
}

export default Random
