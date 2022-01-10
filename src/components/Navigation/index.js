import React from "react";

function Nav() {
	const tabs = [{ name: "About Me" }, { name: "Portfolio" }, { name: "Resume" }];

	return (
		<nav>
			<ul className="navbar flex-row">
				{tabs.map((tab) => (
					<li className="mx-2" key={tab.name}>
						<span>{tab.name}</span>
					</li>
				))}
				<li className="mx-2">Contact</li>
			</ul>
		</nav>
	);
}

export default Nav;
