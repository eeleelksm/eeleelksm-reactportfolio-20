import React, { useState } from "react";

function Nav() {
	return (
		<nav>
			<ul className="navbar">
				<li>
					<a href="#about-me" className="mx-2">
						About Me
					</a>
				</li>
				<li>
					<a href="#projects" className="mx-2">
						Projects
					</a>
				</li>
				<li>
					<a href="#resume" className="mx-2">
						Resume
					</a>
				</li>
				<li>
					<a href="#contact" className="mx-2">
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
}

// THE FOLLOWING NEEDS TO BE REWORKED
// function Nav(props) {
// 	// const tabs = ["About", "Projects", "Resume", "Contact"];

// 	const { tabs = [], setCurrentPage, currentPage } = props;

// 	return (
// 		<nav>
// 			<ul className="navbar">
// 				{tabs.map((tab) => (
// 					<li className="mx-2" key={tab}>
// 						<a
// 							href={"#" + tab.toLowerCase()}
// 							onClick={() => props.setCurrentPage(tab)}
// 							className={props.currentPage === tab ? "nav-link active" : "nav-link"}
// 						>
// 							{tab}
// 						</a>
// 					</li>
// 				))}
// 			</ul>
// 		</nav>
// 	);
// }

export default Nav;
