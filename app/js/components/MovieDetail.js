import React from "react";
import { Link, Router } from "@reach/router";
import Icon from '@material-ui/core/Icon';


class MovieDetail extends React.Component {
	constructor(props) {
		super(props);
		this.getRenderedRating = this.getRenderedRating.bind(this);
	}

	getRenderedRating() {
		let counter = 0;
		let renderedRating = [];
		while (counter < 5) {
			if ((this.props.rating - counter) >= 1) {
				renderedRating.push(<Icon key={counter}>star</Icon>);
			} else if ((this.props.rating - counter) < 0.5) {
				renderedRating.push(<Icon key={counter}>star_border</Icon>);
			} else {
				renderedRating.push(<Icon key={counter}>star_half</Icon>);
			}
			counter++;
		}
		return (renderedRating);
	}

	render() {
		const { title, desc, year, rating, release_date, genre, runtime, poster, backdrop } = this.props;
		let backdropStyles = {
        backgroundImage: 'url(' + backdrop + ')',
	    }

	  //Adjusting descriptions so they're not so long. 
	  //eventually can make this an expand/collapse to see the whole description
	  let cutDesc = desc.split(' ');
	  if (cutDesc.length >= 70) {
	  	  while (cutDesc.length >= 70) {
	  	  	cutDesc.pop();
	  	  } 
	  	  cutDesc = cutDesc.join(" ");
	  	  cutDesc = cutDesc + "...";
	  } else {
	  	cutDesc = cutDesc.join(" ");
	  }
	  
	  //Handle genres
		let genreString = genre.map((genre) => {
			return genre.name;
		})
		genreString = genreString.join(", ");
	

		return (
			<div className="details_wrap" onClick={this.props.closeModal}>
				<div className="details_container">
					<div className="details_backdrop" style={backdropStyles}>
					</div>
					<div className="details_content">
							<h1>{title}</h1>
							<p className="details_rating">{
								rating ? 
								this.getRenderedRating()
								: <em>Not Watched Yet</em>
							}</p>
							<p>{release_date} | {runtime} mins</p> 
							<p>{cutDesc}</p>
							<p>{genreString}</p>
						</div>
				</div>
			</div>
		)
	}
}

export default MovieDetail;