import React from "react";
import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import project4 from "../../../assets/images/project-4.png";
import project5 from "../../../assets/images/project-5.png";
import project6 from "../../../assets/images/project-6.png";

function Project() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener, norefferer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<section className="project-section">
			<h1>Projects</h1>
			<div>
				<a href="https://fast-temple-66110.herokuapp.com/">
					<img
						src={project1}
						alt="project-name"
						className="img-thumbnail"
						onClick={() => openInNewTab("https://fast-temple-66110.herokuapp.com/")}
					/>
				</a>
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
