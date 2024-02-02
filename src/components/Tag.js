import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  const [gif, setGif] = useState('');
  const [loader, setLoader] = useState(false);
  const [tag, setTag] = useState('cat');

  // Memoize the fetchData function using useCallback
  const fetchData = useCallback(async () => {
    try {
      setLoader(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const response = await axios.get(url);
      console.log(response);
      const fetchedGif = response.data.data.images.downsized.url;
      setGif(fetchedGif);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed
    } finally {
      setLoader(false);
    }
  }, [tag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='bg-blue-500 w-full lg:h-[800px] sm:h-[500px] flex flex-col justify-item-stretch items-center rounded-lg gap-10 p-10 my-5'>
      <h2 className='uppercase text-2xl underline font-bold p-5 '>A Random {tag} Gif</h2>
      {loader ? (
        <Spinner />
      ) : (
        <img
          className='object-cover lg:h-[350px] w-[350px] sm:h-[200px]'
          alt='img2'
          src={gif}
          width='350px'
        ></img>
      )}
      <input
        type='text'
        placeholder='Tag'
        name='Tag'
        value={tag}
        className='bg-white w-10/12 p-2 font-bold rounded-md text-lg uppercase opacity-80 hover:opacity-100 transition-all duration-200 focus:outline-none text-center focus:opacity-100 '
        onChange={(event) => setTag(event.target.value)}
      />
      <button
        onClick={clickHandler}
        className='bg-white w-10/12 p-2 font-bold rounded-md text-lg uppercase opacity-80 hover:opacity-100 transition-all duration-200'
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
