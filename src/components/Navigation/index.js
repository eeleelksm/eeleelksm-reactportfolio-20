import React from "react";

// passing props through the Nav function
function Nav(props) {
	const tabs = ["About Me", "Projects", "Resume", "Contact"];
	// Setting the default page to Home

	return (
		<nav>
			<ul className="navbar flex-row">
				{tabs.map((tab) => (
					<li className="mx-2" key={tab}>
						<a
							href={"#" + tab.toLowerCase()}
							// when a tab is clicked
							// the page will set through hanglePageChange props
							onClick={() => props.handlePageChange(tab)}
							className={props.currentPage === tab ? "nav-link active" : "nav-link"}
						>
							{tab}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
