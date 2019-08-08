import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";
import Sidebar from "./components/Sidebar";
import MovieContainer from './components/MovieContainer';
import { tempData, dataForDB, dataFromDB } from "./data/tempData";
import { fetchData, createSearchRequest } from "./functions/getMovieData";
import { fetchGenres } from "./functions/getMovieData";
import '../sass/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			genres: [],
			sidebarOpen: true,
			movieDisplay: {
				alphabetize: true,
				excludeNotWatched: false,
				genresToShow:[]
			}
		}
		this.getGenres = this.getGenres.bind(this);
		this.filterMovies = this.filterMovies.bind(this);
		this.toggleOrganize = this.toggleOrganize.bind(this);
		this.toggleUnwatched = this.toggleUnwatched.bind(this);
	}

	componentDidMount() {
		fetchGenres(this.getGenres);
		const currentMovieData = dataFromDB();
		if (!currentMovieData) {
			this.getDataFromServer();
		} else {
			this.setState({
				movies: currentMovieData
			})
		}
		document.querySelector(".tgl-btn").addEventListener('click', this.toggleOrganize);
		document.querySelector("#includedUnwatched").checked = true;
		document.querySelector("#includedUnwatched").addEventListener('click', this.toggleUnwatched);
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

	getGenres(data) {
		if (!data) {
			console.error('No genres returned');
		} else {
			this.setState({
				genres: data.genres

			})
			this.setState(prevState => ({
				genres: data.genres,
		    movieDisplay: {                  
	        ...prevState.movieDisplay,    
	        genresToShow: data.genres       
		    }
			}))
		}
	}
	//TO DO - combine and generalize these 2 functions
	toggleOrganize(event) {
		console.log('in toggleOrganize');
		const checkbox = document.querySelector(".tgl");
		if (checkbox.checked === true) { //alphabetize
			console.log("alphabetizing");
			this.setState(prevState => ({
		    movieDisplay: {                  
	        ...prevState.movieDisplay,    
	        alphabetize: true       
		    }
			}))
		} else {
			console.log('randomizing');
			this.setState(prevState => ({
		    movieDisplay: {                   
	        ...prevState.movieDisplay,    
	        alphabetize: false       
		    }
			}))
		}
	}

	toggleUnwatched(event) {
		console.log("in toggleUnwatched");
		const checkbox = event.target;
		if (checkbox.checked === true) {
			console.log("including not watched");
			this.setState(prevState => ({
		    movieDisplay: {                  
	        ...prevState.movieDisplay,    
	        excludeNotWatched: false       
		    }
			}))
		} else {
			console.log("excluding not watched");
			this.setState(prevState => ({
		    movieDisplay: {                  
	        ...prevState.movieDisplay,    
	        excludeNotWatched: true       
		    }
			}))
		}
	}

	filterMovies(filter, willAdd) {
		console.log(filter);
		console.log(willAdd);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Movie Library</h1>
					<div className="toggle-container">
						<div className="unwatchedCheckbox">
							<input id="includedUnwatched" type="checkbox"/>
						</div>
						<input className="tgl tgl-light" id="cb1" type="checkbox"/>
    				<label className="tgl-btn" htmlFor="cb1"></label>
    			</div>
				</header>
				<Sidebar 
					genres={this.state.genres}
					callback={this.filterMovies}
				/>
				<MovieContainer 
					movies={this.state.movies}
					sidebarOpen={this.state.sidebarOpen}
					movieDisplay={this.state.movieDisplay}
				/>
			</div>
		)
	}
}

render(React.createElement(App), document.getElementById("root"));

/*Some lite reading about bind() and this:
-https://codeburst.io/understanding-that-and-bind-8778f779b149 (also look at the resources at the end)
-https://javascript.info/bind - specifically has stuff about setTimeout which is relavant since I think this is being lost within the setInterval
-https://www.youtube.com/watch?v=g2WcckBB_q0
-Front End Masters: Deep Foundations of JS has binding
-https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530
 */