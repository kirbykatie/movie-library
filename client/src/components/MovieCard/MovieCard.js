import React from 'react';
import PropTypes from 'prop-types';


const MovieCard = props => {
  const { data } = props;

  return (
    <div data-testid="MovieCard" className="moviecard">
      <div className="moviecard_img">
					<img src={data.poster}/>
				</div>
				<div className="moviecard_wrap">
					<div className="moviecard_content">
						<h2>{data.title}</h2>
						<p className="movidecard_year">{data.year}</p>
					</div>
				</div>
				{/*this.state.showDetails ? this.renderDetails() : null*/}
    </div>
  )
}

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
