import React, { useState } from "react";
import Nav from "../Navigation";

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
			<section>
				<Nav />
			</section>
		</header>
	);
}

export default Header;
