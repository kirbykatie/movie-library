import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';


const Sidebar = props => {
  const { propFilters, genreOptions, setFiltersCallback, closeSidebarCallback } = props;
  const [filters, setFilters] = useState(propFilters);
  const [ratingHover, setRatingHover] = useState(-1)
  const classes = useStyles();

  const ratingText = {
    "-1": "",
    0.5: "0.5 stars & up",
    1: "1 star & up",
    1.5: "1.5 stars & up",
    2: "2 stars & up",
    2.5: "2.5 stars & up",
    3: "3 stars & up",
    3.5: "3.5 stars & up",
    4: "4 stars & up",
    4.5: "4.5 stars & up",
    5: "5 stars & up",
  }
  
  console.log(ratingHover);

  return (
    <div data-testid="Sidebar" className="sidebar">
      <h1>Advanced Search</h1>
      <div className="sidebar_section notWatched_container">
        <input type="checkbox" 
          checked={filters.includeNotWatched}
          onChange={() => 
            setFilters(prevFilters => {
              return {...prevFilters, includeNotWatched: !filters.includeNotWatched}
            })
          }
          name="notWatched"
        />
        <label htmlFor="notWatched">Include Not Watched?</label>
      </div>
      {genreOptions.length > 0 ? 
      <div className="sidebar_section genreSelection">
        <Autocomplete 
          multiple
          id="genreSelection"
          classes={{root: classes.autocomplete_root}}
          options={genreOptions}
          defaultValue={() => filters.genres.length > 0 ? filters.genres : []}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(e, value) => {
            setFilters(prevFilters => {
              return {...prevFilters, genres: value}
            })
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Specify Genres"
              placeholder="Genre"
            />
          )}
        />
      </div> : null }
      <div className="sidebar_section ratingSelection_container">
        <p>Specify Rating</p>
        <div className="ratingSelection">
          <Rating
            name="rating"
            value={filters.rating}
            onChange={(e, value) => {
              setRatingHover(value)
              setFilters(prevFilters => {
                return {...prevFilters, rating: value}
              })
            }}
            onChangeActive={(e, value) => {
              setRatingHover(value)
            }}
          />
          <label htmlFor="rating">{ratingText[ratingHover]}</label>
        </div>
      </div>
      <div className="sidebar_section submit_container">
        <Button variant="contained" 
          onClick={() => {
            setFiltersCallback(filters)
            closeSidebarCallback();
          }}
        >
          Update
        </Button>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  autocomplete_root: {
    maxWidth: '350px'
  },
});

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
