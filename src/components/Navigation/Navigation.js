import React, { useState } from "react";

function Nav(props) {
	const tabs = ["About", "Projects", "Resume", "Contact"];

	const { tabs = [], setCurrentPage, currentPage } = props;

	return (
		<nav>
			<ul className="navbar">
				<li>
					<NavLink exact to="/" className="mx-2">
						About Me
					</NavLink>
				</li>
				<li>
					<NavLink to="/projects" className="mx-2">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/resume" className="mx-2">
						Resume
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="mx-2">
						Contact Me
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
