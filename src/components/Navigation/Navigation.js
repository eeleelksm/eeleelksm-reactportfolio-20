import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul className="navbar">
				<li>
					<a href="#about" className="mx-2">
						About Me
					</a>
				</li>
				<li>
					<a href="#projects" className="mx-2">
						Projects
					</a>
				</li>
				<li>
					<a href="#resume" className="mx-2">
						Resume
					</a>
				</li>
				<li>
					<a href="#contact" className="mx-2">
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
