import React, { useState } from "react";
import Nav from "../Navigation/Navigation";

function Header() {
	return (
		<header>
			<section>
				<a href="/" className="header-title">
					Keshia-Lee Martin
				</a>
				<h3 className="header-desc">
					Fullstack Web Developer || Future Game Programmer
				</h3>
			</section>
			<section className="nav-right">
				<Nav />
			</section>
		</header>
	);
}

export default Header;
