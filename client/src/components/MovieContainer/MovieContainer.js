import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import movieData from '../../utils/testData_full';
import arrShuffle from '../../utils/arrShuffle';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';
import MovieDetailCard from '../MovieDetailCard/MovieDetailCard';
import MovieEditDetails from '../MovieEditDetails/MovieEditDetails';

const MovieContainer = props => {
  //TODO make genre options a context instead of prop drilling
  const { propsAlpha, propsInclude, filters, genreOptions } = props;
  /*const [renderSettings, setRenderSettings] = useState({
    isAlpha: propsAlpha,
    ...filters
  })*/
  const [isAlpha, setIsAlpha] = useState(propsAlpha);
  const [allMovies, setAllMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);
  const [editIsOpen, setEditIsOpen] = useState(false)

  useEffect(() => {
    const jsonBinKey = atob(process.env.JSONBIN_KEY)
    const jsonBinId = process.env.JSONBIN_ID
    async function getMovieData() {
      fetch(`https://api.jsonbin.io/b/${jsonBinId}`, {
        headers: {
          "secret-key": jsonBinKey
        }
      }).then(response => response.json())
        .then(data => {
          let currentMovieData = data;
          console.log(currentMovieData)
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
        })
        .catch(err => console.error(err))
    }
		getMovieData()
  }, [])

  useEffect(() => {
    //setRenderSettings(prevState => {return {...prevState, isAlpha: propsAlpha}})
    setIsAlpha(propsAlpha)
    if (renderedMovies.length > 0) {
      setRenderedMovies(updateMovieOrder())
    }
  }, [propsAlpha])

  useEffect(() => {
    console.log(`filters.includeNotWatched has been updated to ${filters.includeNotWatched}`)
    //setRenderSettings(prevState => {return {...prevState, includeNotWatched: filters.includeNotWatched}})
    if (renderedMovies.length > 0) {
      setRenderedMovies(updateFilters())
    }
  }, [filters])

  useEffect(() => {
    console.warn('AllMovies has updated')
    // updateFilters();
  }, [allMovies])

  const updateMovieData = (newMovieData) => {
    let newMovies = allMovies;
    newMovies.forEach(movie => {
      if (movie.id = newMovieData.id) {
        movie = newMovieData
      }
    })
    setAllMovies(newMovies)
  }


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

  const updateFilters = () => {
    let newMoviesRendered = allMovies;
    //Include Not Watched
    newMoviesRendered = filters.includeNotWatched ? newMoviesRendered : newMoviesRendered.filter(movie => movie.watched == true);

    //Filter Genres
    if (filters.genres.length > 0) {
      const selectedGenreIds = filters.genres.map(genre => genre.id);
      newMoviesRendered = newMoviesRendered.filter(movie => 
        movie.genre.some(genre => selectedGenreIds.includes(genre.id))
      )
    }
    //Filter Rating
    if (filters.rating > 0) {
      newMoviesRendered = newMoviesRendered.filter(movie => 
        movie.rating >= filters.rating || movie.rating === null
      )
    }
    console.log(newMoviesRendered)
    
  
    if (!isAlpha) {
      newMoviesRendered = updateMovieOrder(newMoviesRendered)
    }
    return newMoviesRendered;
  }


  const handleModalClick = (event => {
    event.stopPropagation();
    if (event.target.classList && event.target.classList.contains('modal')) {
      event.target.classList.remove('modal-show');
      setActiveMovie(null);
      setEditIsOpen(false)
    }
  })

  //console.log(renderSettings);
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
         <MovieDetailCard 
          movie={activeMovie} 
          enableEditMode={() => setEditIsOpen(true)}
          genreOptions={genreOptions}
        />
      : null }
    </Modal>
  </>
  )
};

MovieContainer.propTypes = {};

MovieContainer.defaultProps = {};

export default MovieContainer;
