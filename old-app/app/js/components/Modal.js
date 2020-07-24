import React from "react";
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}
	componentDidMount() {
		modalRoot.appendChild(this.el);
	}
	componentWillUnmount() {
		console.log('component is unmounting');
		modalRoot.removeChild(this.el);
	}
	handleClick(e) {
		console.log(this.el);
		if (e.target === this.el) {
			console.log("clicked within portal");
		}
	}
	render() {
		return createPortal(this.props.children, this.el);
	}
}

export default Modal;



