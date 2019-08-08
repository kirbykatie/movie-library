import React from "react";
import { Link, Router } from "@reach/router";
import MovieCard from "./MovieCard";
import { arrShuffle } from "../functions/utility";

class MovieContainer extends React.Component {
	constructor(props) {
		super(props);

		/*this.toggleOrganize = this.toggleOrganize.bind(this);
		this.toggleUnwatched = this.toggleUnwatched.bind(this);
		this.checkFilters = this.checkFilters.bind(this);*/
	}

	/*componentDidMount() {
		//TODO: organize and label header filters.
		document.querySelector(".tgl-btn").addEventListener('click', this.toggleOrganize);
		document.querySelector("#includedUnwatched").checked = true;
		document.querySelector("#includedUnwatched").addEventListener('click', this.toggleUnwatched);
	}

	toggleOrganize(event) {
		console.log('in toggleOrganize');
		const checkbox = document.querySelector(".tgl");
		if (checkbox.checked == true) { //alphabetize
			console.log("alphabetizing");
			this.setState({
				alphabetize: true
			})
		} else {
			console.log('randomizing');
			this.setState({
				alphabetize: false
			})
		}
	}

	toggleUnwatched(event) {
		console.log("in toggleUnwatched");
		const checkbox = event.target;
		if (checkbox.checked == true) {
			console.log("including not watched");
			this.setState({
				excludeNotWatched: false
			})
		} else {
			console.log("excluding not watched");
			this.setState({
				excludeNotWatched: true
			})
		}
	}*/

	checkFilters() {
		const { movies, movieDisplay } = this.props;
		let renderedMovies;
		if (movies) {
			let testGenres = [
				{
					id: 16,
					name: "Animation"
				},
				{
					id:27,
					name: "Horror"
				}
			];
			if (movieDisplay.alphabetize) {
				renderedMovies = movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
			} else {
				renderedMovies = arrShuffle(movies);
			}
			if (movieDisplay.excludeNotWatched) {
				renderedMovies = movies.filter(movie => movie.watched === true);
			} 
			if (movieDisplay.genresToShow.length !== 0) {
				let genreMovies = [];
				renderedMovies.forEach(movie => {
					let genres = movie.genre;
					for (const genre of genres) {
						let flag = false
						for (const genreToShow of testGenres) {
							if (genre.name === genreToShow.name) {
								genreMovies.push(movie);
								flag = true;
								break;
							}
						}
						if (flag) {
							flag = false;
							break;
						}
					}
				});
				console.log(genreMovies);
				renderedMovies = genreMovies;
			}
		}
		return renderedMovies;
	}

	render() {
		const { movies, sidebarOpen } = this.props;
		const renderedMovies = this.checkFilters();
		if (renderedMovies.length === 0) {
			return (
				<main></main>
			)
		} else {
			return (
			<main className=
				{sidebarOpen ? "sidebar--active" : "" }>
				{	renderedMovies.map(movie => {
					return (
						<MovieCard 
							key={movie.id}
							poster={movie.poster}
							backdrop={movie.backdrop}
							title={movie.title}
							desc={movie.description}
							year={movie.year}
							rating={movie.rating}
							release_date={movie.release_date}
							runtime={movie.runtime}
							genre={movie.genre}
							rating={movie.rating}
							sidebarOpen={sidebarOpen}
						/>
					)
				})}
				</main>
			)
		}
	}
}

export default MovieContainer;

/*When you need to grab raw JSON from the page...
<pre>
  <code>{JSON.stringify(this.state.movies)}</code>
</pre>
*/