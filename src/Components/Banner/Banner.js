import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants';

function Banner() {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
    
    const fetchTrendingMovies = async () => {
      
        async function detail(search){
              // First, get the list of trending movies (search term can be adjusted)
            const searchResponse = await axios.get(`?s=${search}&apikey=${API_KEY}`);
            const movieList = searchResponse.data.Search;
            
            
            // Then, fetch detailed information for each movie including the plot
            const movieDetailsPromises = movieList.map(movie =>
              axios.get(`?i=${movie.imdbID}&apikey=${API_KEY}`)
            );
            
            const movieDetailsResponses = await Promise.all(movieDetailsPromises);
            return movieDetailsResponses.map(response => response.data);
        }
        const detailedMovie1 = await detail('Avengers')
        const detailedMovie2 = await detail('Money Heist')
        
        
        setMovies1(detailedMovie1[2]);  
        setMovies2(detailedMovie2[3])
      
    };

    fetchTrendingMovies();
  }, []);
 
  return (
    <div className="parent">
      <div className='Banner' style={{backgroundImage:`url(${movies1 ? movies1.Poster : ""})`}}>
        
        <div className='content' key={movies1 ? movies1.imdbID : ""}>
            <h1 className='title'>{movies1 ? movies1.Title : ""}</h1>
            <div className='Banner-btn'>
                <button className='btn'>Play</button>
                <button className='btn'>My list</button>
            </div>
            <h1 className='description'>{movies1 ? movies1.Plot : ""}</h1>
        </div>
        <div className="fade-bottom">

        </div>
      </div>
      <div className='Banner' style={{backgroundImage:`url(${movies2 ? movies2.Poster : ""})`}}>
  
        <div className='content' key={movies2 ? movies2.imdbID : ""}>
            <h1 className='title'>{movies2 ? movies2.Title : ""}</h1>
            <div className='Banner-btn'>
                <button className='btn'>Play</button>
                <button className='btn'>My list</button>
            </div>
            <h1 className='description'>{movies2 ? movies2.Plot : ""}</h1>
        </div>
        <div className="fade-bottom">

        </div>
      </div>
    </div>
  )

}

export default Banner
