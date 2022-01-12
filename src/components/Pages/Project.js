import React from "react";
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-2.png";
import project3 from "../../assets/images/project-3.png";
import project4 from "../../assets/images/project-4.png";
import project5 from "../../assets/images/project-5.png";
import project6 from "../../assets/images/project-6.png";

function Project() {
	return (
		<section className="project-section">
			<h1>Projects</h1>
			<div>
				<img src={project1} alt="project-name" className="img-thumbnail" />
				<img src={project2} alt="project-name" className="img-thumbnail" />
				<img src={project3} alt="project-name" className="img-thumbnail" />
				<img src={project4} alt="project-name" className="img-thumbnail" />
				<img src={project5} alt="project-name" className="img-thumbnail" />
				<img src={project6} alt="project-name" className="img-thumbnail" />
			</div>
		</section>
	);
}

export default Project;
