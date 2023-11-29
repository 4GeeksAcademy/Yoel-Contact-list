import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 navbar-collapse">
			<Link className="ms-3" to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="menu">
				<Link className="m-5" to="/agenda">
					<span>Agenda</span>
				</Link>
				<Link className="m-5" to="/">
					<span>Create contact</span>
				</Link>
			</div>
		</nav>
	);
};
