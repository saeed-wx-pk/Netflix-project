import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { fetchComedyMovies, fetchNetflixOriginals } from '../../fetching';




function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{

    if(props.isSmall){
      async function fetch(){
        let movies=await fetchComedyMovies()
        setMovies(movies)
        console.log(movies)
      }
     fetch()
    }else{
      async function fetch(){
        let movies=await fetchNetflixOriginals()
        setMovies(movies)
      }
      fetch()
    }
    

  },[])
  
    return (
      <div className='row'>
          <h2> {props.title}</h2>
          <div className="posters">
            {
              movies.map(movie=> (
                <div key={movie.imdbID} >
                  <img alt={`${movie.Title}`} src={`${movie.Poster}`} className={ props.isSmall ? "smallPoster" : "poster"} />
                </div>
              ))
            } 
          </div>
      </div>
    ) 
  
  
}

export default RowPost