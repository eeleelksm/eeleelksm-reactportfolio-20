function Nav(props) {
	const tabs = ["About", "Projects", "Resume", "Contact"];

	return (
		<nav>
			<ul className="navbar">
				{tabs.map((tab) => (
					<li className="mx-2" key={tab}>
						<a
							href={"#" + tab.toLowerCase()}
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
