import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import movieData from '../../utils/testData_full';
import arrShuffle from '../../utils/arrShuffle';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';
import MovieDetailCard from '../MovieDetailCard/MovieDetailCard';

const MovieContainer = props => {
  const { propsAlpha, propsInclude } = props;
  const [renderSettings, setRenderSettings] = useState({
    isAlpha: propsAlpha,
    includeNotWatched: propsInclude,
  })
  const [allMovies, setAllMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);
  const [excludeNotWatched, setExcludeNotWatched] = useState(false);

  useEffect(() => {
    let currentMovieData = movieData();
		if (!currentMovieData) {
			//getDataFromServer();
		} else {
      currentMovieData = updateMovieOrder(currentMovieData);
      // Once set on component mount, allMovies should not get updated again!
      // It is the source of truth for the movie data
      setAllMovies(currentMovieData);
      console.log(currentMovieData)
      setRenderedMovies(currentMovieData);
    }
  }, [])

  useEffect(() => {
    setRenderSettings(prevState => {return {...prevState, isAlpha: propsAlpha}})
    if (renderedMovies.length > 0) {
      setRenderedMovies(updateMovieOrder())
    }
  }, [propsAlpha])

  useEffect(() => {
    if (renderedMovies.length > 0) {
      setRenderedMovies(updateFilters('includeNotWatched'))
    }
  }, [propsInclude])


  const updateMovieOrder = nonStateMovies => {
    let newMovieOrder = nonStateMovies ? nonStateMovies : renderedMovies;
    if (propsAlpha) {
      newMovieOrder = newMovieOrder.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    } else {
      console.log('shuffling movies')
      newMovieOrder = arrShuffle(newMovieOrder);
    }
    return newMovieOrder;
  }

  const updateFilters = changedFilter => {
    let newMoviesRendered = [];
    switch (changedFilter) {
      case "includeNotWatched":
        if (propsInclude) {
          newMoviesRendered = allMovies;
        } else {
          newMoviesRendered = allMovies.filter(movie => movie.watched == true);
        }
        console.log(newMoviesRendered)
        break;
      default:
        break;
    }
    if (!renderSettings.isAlpha) {
      newMoviesRendered = updateMovieOrder(newMoviesRendered)
    }
    return newMoviesRendered;
  }


  const handleModalClick = (event => {
    event.stopPropagation();
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('modal-show');
      setActiveMovie(null);
    }
  })

  console.log(renderSettings);
  return (
  <>
    <main data-testid="MovieContainer">
      {renderedMovies.length !== 0 ? 
      renderedMovies.map(movie => {
        return (
          <MovieCard 
            key={movie.id}
            data={movie} 
            updateActiveMovieCallback={selectedMovie => setActiveMovie(selectedMovie)}
          />
        )
      }) 
      : null}
    </main>
    <Modal 
      show={activeMovie ? true : false}
      handleClickCallback={handleModalClick}
    >
      {activeMovie ? 
         <MovieDetailCard movie={activeMovie} />
      : null }
    </Modal>
  </>
  )
};

MovieContainer.propTypes = {};

MovieContainer.defaultProps = {};

export default MovieContainer;
