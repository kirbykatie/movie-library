import React from "react";
import { Link, Router } from "@reach/router";
import MovieCard from "./MovieCard";
import { tempData, dataForDB, dataFromDB } from "../data/tempData";
import { fetchData, createSearchRequest } from "../functions/getMovieData";
import { arrShuffle } from "../functions/utility";

class MovieContainer extends React.Component {
	constructor(props) {
		super(props);
		//TODO: add a 'loading' bool
		this.state = {
			movies: [],
			activeMovie: null,
			alphabetize: true,
			excludeNotWatched: false
		}
		this.toggleOrganize = this.toggleOrganize.bind(this);
		this.toggleUnwatched = this.toggleUnwatched.bind(this);
		this.checkFilters = this.checkFilters.bind(this);
	}

	componentDidMount() {
		//TODO: organize and label header filters.
		document.querySelector(".tgl-btn").addEventListener('click', this.toggleOrganize);
		document.querySelector("#includedUnwatched").checked = true;
		document.querySelector("#includedUnwatched").addEventListener('click', this.toggleUnwatched);
		const currentMovieData = dataFromDB();
		if (!currentMovieData) {
			this.getDataFromServer();
		} else {
			this.setState({
				movies: currentMovieData
			})
		}
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
	}

	getDataFromServer() {
		let movies = [];
		function createData(rawData) {
			console.log(rawData);
			let movie = {
				id: rawData.id,
				title: rawData.title,
				description: rawData.overview,
				year: rawData.release_date.slice(0,4),
				release_date: rawData.release_date,
				watched: true,
	    	rating: null,
				genre: rawData.genres,
				runtime: rawData.runtime,
				quality: null,
		    subtitles: null,
		    franchise: null,
		    tags:[],
				poster: `http://image.tmdb.org/t/p/w500${rawData.poster_path}`,
				backdrop: `http://image.tmdb.org/t/p/w1280${rawData.backdrop_path}`
			}
			movies.push(movie);
			console.log(movies);
		}
		const movieSearchData = dataForDB();
			console.log(movieSearchData);

			let counter = 0;
			console.log("movieSearchData is " + movieSearchData.length);
			this.interval = window.setInterval(() => {
				const requestURL = createSearchRequest(movieSearchData[counter]);
				fetchData(requestURL, createData);	//so for some reason setState only updates when the interval runs the next time, which is probably related to the delay of the fetch, but I can't add setState to createData because it's not a class function and I TRIED making createData a class function AND a callback function, and that didn't work. So we can try again later. For now, just sticking another Endgame at the end of the search JSON.
				//Possible solution to above comment's problem - need to bind the function to "this" at the beginning of the componentDidMount function?
				this.setState({
					movies
				})
				
				counter += 1;
				if (counter >= movieSearchData.length) {
					clearInterval(this.interval);
				}
				
			}, 500)
	}

	checkFilters() {
		const { movies, alphabetize, excludeNotWatched } = this.state;
		//Replace below line with deep copy - will need to copy by value each time because filtering will remove
		//unless we add the filter to the map in render()? 
		let renderedMovies;
		if (alphabetize) {
			renderedMovies = movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
		} else {
			renderedMovies = arrShuffle(movies);
		}
		if (excludeNotWatched) {
			renderedMovies = movies.filter(movie => movie.watched == true);
		} 
		return renderedMovies;
	}

	render() {
		console.log(this.state);
		if (this.state.movies.length === 0) {
			return (
				<main></main>
			)
		} else {
			const renderedMovies = this.checkFilters();
			return (
			<main>
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