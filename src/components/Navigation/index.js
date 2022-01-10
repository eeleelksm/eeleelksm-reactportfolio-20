import React from "react";

function Nav() {
	const tabs = [{ name: "About Me" }, { name: "Portfolio" }, { name: "Resume" }];

	function tabSelected(name) {
		console.log(`${name} clicked`);
	}

	return (
		<nav>
			<ul className="">
				{tabs.map((tab) => (
					<li className="" key={tab.name}>
						<span onClick={() => tabSelected(tab.name)}> {tab.name}</span>
					</li>
				))}
				<li>Contact</li>
			</ul>
		</nav>
	);
}

export default Nav;
