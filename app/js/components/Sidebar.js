import React from "react";
import { Link, Router } from "@reach/router";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		console.log(e.target.id);
		if (e.target.checked) {
			this.props.callback(e.target.id, true);
		} else {
			this.props.callback(e.target.id, false);
		}
	}

	render() {
		const { genres, callback } = this.props;
		return (
			<section className="sidebar">
				<div className="sidebar__wrap">
					<form>
					{genres.map(genre => {
						return (
							<div className="genre__wrap" key={genre.id}>
								<input type="checkbox" id={genre.name} name={genre.name} onClick={this.handleClick} />
								<label htmlFor={genre.name}>{genre.name}</label>
							</div>
						)
					})}
					</form>
				</div>
			</section>
		)
	}
}

export default Sidebar;