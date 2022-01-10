import React from "react";
import Nav from "../Navigation";

function Header() {
	return (
		<header>
			<section className="header-title">
				<a href="/">Keshia-Lee Martin</a>
			</section>
			<section className="header-nav">
				<Nav />
			</section>
		</header>
	);
}

export default Header;
