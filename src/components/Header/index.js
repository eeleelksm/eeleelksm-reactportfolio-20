import React, { useState } from "react";
import Nav from "../Navigation";

function Header() {
	const [tabs] = useState([
		{ name: "About Me" },
		{ name: "Portfolio" },
		{ name: "Resume" },
	]);

	const [currentTab, setCurrentTab] = useState(tabs[0]);

	return (
		<header>
			<section className="header-title">
				<a href="/">Keshia-Lee Martin</a>
				<h3>Fullstack Web Developer || Future Game Programmer</h3>
			</section>
			<section className="header-nav">
				<Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />
			</section>
		</header>
	);
}

export default Header;
