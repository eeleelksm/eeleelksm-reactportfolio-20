import React from "react";
import project from "../../assets/images/project-1.png";

function Project() {
	return (
		<section>
			<h1>Projects</h1>
			<div>
				<img src={project} alt="project name" className="img-thumbnail" />
			</div>
		</section>
	);
}

function Resume() {}

export default Project;
