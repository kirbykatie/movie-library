import React from "react";
import { Link } from "@reach/router";
import Modal from "./Modal";
import MovieDetail from "./MovieDetail";

class MovieCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		}
		this.handleCardClick = this.handleCardClick.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleCardClick(e) {
		if (!this.props.sidebarOpen) {
			e.preventDefault();
			this.setState({
				showDetails: true
			})
		}
	}

	handleCloseModal(e) {
		e.stopPropagation();
		if(e.target == document.querySelector(".details_wrap") || e.target == document.querySelector(".modalClose")) {
			this.setState({
				showDetails: false
			})
		}
	}

	renderDetails() {
		const { title, desc, year, rating, release_date, genre, runtime, poster, backdrop } = this.props;
		return (
			<Modal>
				<MovieDetail
					backdrop={backdrop}
					title={title}
					desc={desc}
					year={year}
					rating={rating}
					release_date={release_date}
					runtime={runtime}
					genre={genre}
					closeModal={this.handleCloseModal}
				/>
			</Modal>
		)
	}

	render() {
		const { title, desc, year, release_date, genre, runtime, poster, backdrop } = this.props;
		return (
			<div className="moviecard" onClick={this.handleCardClick}>
				<div className="moviecard_img">
					<img src={poster}/>
				</div>
				<div className="moviecard_wrap">
					<div className="moviecard_content">
						<h2>{title}</h2>
						<p className="movidecard_year">{year}</p>
					</div>
				</div>
				{this.state.showDetails ? this.renderDetails() : null}
			</div>
		)
	}
}

export default MovieCard;