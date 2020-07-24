import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import movieData from '../../utils/testData_full';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';

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
  <>
    <main data-testid="MovieContainer">
      {movies.length !== 0 ? 
      movies.map(movie => {
        return (
          <MovieCard 
            key={movie.id}
            data={movie} 
            updateActiveMovieCallback={selectedMovie => {
              console.log(`updating active movie to ${selectedMovie.title}`)
              setActiveMovie(selectedMovie)
            }}
          />
        )
      }) 
      : null}
    </main>
    <Modal 
      show={activeMovie ? true : false}
    >
      <div>
        {activeMovie ? 
          <h1>{activeMovie.title}</h1>
        : null
      }
      </div>
    </Modal>
  </>
  )
};

MovieContainer.propTypes = {};

MovieContainer.defaultProps = {};

export default MovieContainer;
