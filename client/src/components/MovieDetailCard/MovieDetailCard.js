import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';


const MovieDetailCard = props => {
  const { movie } = props;

  const getRenderedRating = () => {
    let counter = 0;
		let renderedRating = [];
		while (counter < 5) {
			if ((movie.rating - counter) >= 1) {
				renderedRating.push(<Icon key={counter}>star</Icon>);
			} else if ((movie.rating - counter) < 0.5) {
				renderedRating.push(<Icon key={counter}>star_border</Icon>);
			} else {
				renderedRating.push(<Icon key={counter}>star_half</Icon>);
			}
			counter++;
		}
		return renderedRating;
  }

  const shortenDescription = () => {
    let cutDesc = movie.description.split(' ');
	  if (cutDesc.length >= 70) {
	  	  while (cutDesc.length >= 70) {
	  	  	cutDesc.pop();
	  	  } 
	  	  cutDesc = cutDesc.join(" ");
	  	  cutDesc = cutDesc + "...";
	  } else {
	  	cutDesc = cutDesc.join(" ");
    }
    return cutDesc;
  }

  const renderGenres = () => {
    let genreString = movie.genre.map((genre) => {
			return genre.name;
		})
    genreString = genreString.join(", ");
    return genreString;
  }

  return (
    <div data-testid="MovieDetailCard" className="details_container">
      <div className="details_backdrop" style={{backgroundImage: 'url(' + movie.backdrop + ')'}}/>
      <div className="details_wrap">
        <div className="details_content" >
          <h1>{movie.title}</h1>
          <p className="details_rating">{
            movie.rating ? 
            getRenderedRating()
            : <em>Not Watched Yet</em>
          }</p>
          <p>{movie.release_date} | {movie.runtime} mins</p> 
          <p>{shortenDescription()}</p>
          <p>{renderGenres()}</p>
        </div>
      </div>
    </div>
  )
}

MovieDetailCard.propTypes = {};

MovieDetailCard.defaultProps = {};

export default MovieDetailCard;
