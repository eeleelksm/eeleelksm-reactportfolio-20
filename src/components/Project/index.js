import React from "react";
import project from "../../assets/images/project-1.png";

function Portfolio(props) {
	return (
		<section>
			<h1>Portfolio</h1>
			<div>
				<img src={project} alt="project name" className="img-thumbnail" />
			</div>
		</section>
	);
}

export default Portfolio;
