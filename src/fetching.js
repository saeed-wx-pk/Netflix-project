import axios from './axios'
import { API_KEY } from './constants/constants';


const netflixOriginals = [
  'Stranger Things',
  'The Witcher',
  'Narcos',
  'The Crown',
  'Black Mirror',
  'Money Heist',
  'BoJack Horseman',
  '13 Reasons Why',
  'Ozark',
  'House of Cards'
];

 export const fetchNetflixOriginals = async () => {
    try {
      const movieDetailsPromises = netflixOriginals.map(title =>
        axios.get(`?t=${title}&apikey=${API_KEY}`)
      );

      const movieDetailsResponses = await Promise.all(movieDetailsPromises);
      const detailedMovies = movieDetailsResponses.map(response => response.data);

      return(detailedMovies)
    } catch (error) {
      console.error('Error fetching the movies', error);
    }
  };


  export const fetchComedyMovies = async () => {
    try {
      const searchResponse = await axios.get(`?s=comedy&type=movie&apikey=${API_KEY}`);
      const movieList = searchResponse.data.Search;
  
      if (!movieList) {
        throw new Error("No movies found for the search term 'comedy'.");
      }
  
      // Fetch detailed information for each movie
      const movieDetailsPromises = movieList.map(movie =>
        axios.get(`?i=${movie.imdbID}&apikey=${API_KEY}`)
      );
  
      const movieDetailsResponses = await Promise.all(movieDetailsPromises);
      const detailedMovies = movieDetailsResponses.map(response => response.data);
  
      // Filter movies by genre "Action"
      const actionMovies = detailedMovies.filter(movie => movie.Genre.includes('Comedy'));
      
      return(actionMovies)
    } catch (error) {
      console.error('Error fetching the movies', error);
    }
  };

