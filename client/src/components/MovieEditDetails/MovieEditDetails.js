import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';


const MovieEditDetails = props => {
  const { movie, updateMovieData, disableEditMode, shortenedDesc, simpleGenres, genreOptions } = props;
  const [ratingHover, setRatingHover] = useState(movie.rating)
  const [genres, setGenres] = useState(simpleGenres)

  const localEdit = (data) => {
    console.log(`${data} clicked`)
  }

  const savedClicked = () => {

  }

  //TODO add multi-selects for genres and tags 
  return (
    <div data-testid="MovieEditDetails" className="details_container details_container_edit">
      <div className="details_backdrop" style={{backgroundImage: 'url(' + movie.backdrop + ')'}}/>
      <div className="details_edit_btn">
        <IconButton aria-label="edit" style={{color: "white"}} onClick={disableEditMode}>
          <Icon>close</Icon>
        </IconButton>
      </div>
      <div className="details_wrap">
        <div className="details_content" >
          <form>
            <h1>{movie.title}</h1>
            {/* <TextField 
               label={movie.title} 
               variant="filled"
               fullWidth
               style={{backgroundColor: 'white'}} 
            /> */}
            <Rating
              name="rating"
              value={movie.rating}
              onChange={(e, value) => {
                setRatingHover(value)
                // setFilters(prevFilters => {
                //   return {...prevFilters, rating: value}
                // })
              }}
              onChangeActive={(e, value) => {
                setRatingHover(value)
              }}
            />
            {/* <div>
              <TextField 
                label={movie.release_date} 
                variant="filled"
                style={{backgroundColor: 'white'}} 
              />
              <TextField 
                label={movie.runtime} 
                variant="filled"
                style={{backgroundColor: 'white'}} 
              />
            </div> */}
            <p>{movie.release_date} | {movie.runtime} mins</p>
            <p>{shortenedDesc}</p>
            <Select
              labelId="genre-select-label"
              id="genre-select"
              multiple
              value={genres}
              onChange={event => setGenres(event.target.value)}
              // input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
              // MenuProps={MenuProps}
            >
              {genreOptions.map((genre) => (
                <MenuItem key={genre.name} value={genre.name} >
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </form>
        </div>
      </div>
    </div>
  )
}

MovieEditDetails.propTypes = {};

MovieEditDetails.defaultProps = {};

export default MovieEditDetails;
