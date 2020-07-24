import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import movieData from '../../utils/testData_full';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);
  const [isAlpha, setIsAlpha] = useState(true);
  const [excludeNotWatched, setExcludeNotWatched] = useState(false);

  useEffect(() => {
    const currentMovieData = movieData();
    console.log(currentMovieData);
		if (!currentMovieData) {
			//getDataFromServer();
		} else {
      setMovies(currentMovieData)
    }
  }, [])

  return (
  <main data-testid="MovieContainer">
    {movies.length !== 0 ? 
    movies.map(movie => {
      return (
        <MovieCard data={movie} />
      )
    }) 
    : null}
  </main>
  )
};

MovieContainer.propTypes = {};

MovieContainer.defaultProps = {};

export default MovieContainer;
