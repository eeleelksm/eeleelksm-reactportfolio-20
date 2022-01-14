import React, { useState } from "react";
import Nav from "../Navigation/Navigation";

function Header() {
	return (
		<header>
			<section>
				<a href="/" className="header-title">
					keshia-lee martin
				</a>
				<h3 className="header-desc">
					fullstack web developer & future game programmer
				</h3>
			</section>
			<section className="nav-right">
				<Nav />
			</section>
		</header>
	);
}

export default Header;
