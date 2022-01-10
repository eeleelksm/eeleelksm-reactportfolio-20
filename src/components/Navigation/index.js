import React from "react";

function Nav() {
	const tabs = [{ name: "About Me" }, { name: "Portfolio" }, { name: "Resume" }];

	function tabSelected(name) {
		console.log(`${name} clicked`);
	}

	return (
		<nav>
			<ul className="navbar">
				{tabs.map((tab) => (
					<li className="mx-2" key={tab.name}>
						<span onClick={() => tabSelected(tab.name)}> {tab.name}</span>
					</li>
				))}
				<li className="mx-2">Contact</li>
			</ul>
		</nav>
	);
}

export default Nav;
