import React from "react";
import Nav from "../Navigation";

function Header() {
	return (
		<header>
			<section className="header-title">
				<a href="/">Keshia-Lee Martin</a>
				<h3>Fullstack Web Developer || Future Game Programmer</h3>
			</section>
			<section className="header-nav">
				<Nav />
			</section>
		</header>
	);
}

export default Header;
