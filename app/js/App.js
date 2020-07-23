import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";
//import Sidebar from "./components/Sidebar";
import MovieContainer from './components/MovieContainer';
import { fetchGenres } from "./functions/getMovieData";
import '../sass/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			genres: []
		}
		this.getGenres = this.getGenres.bind(this);
	}

	componentDidMount() {
		fetchGenres(this.getGenres);
	}

	getGenres(data) {
		if (!data) {
			console.error('No genres returned');
		} else {
			this.setState({
				genres: data.genres
			})
		}
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
				{/*<Sidebar genres={this.state.genres}/>*/}
				<MovieContainer/>
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