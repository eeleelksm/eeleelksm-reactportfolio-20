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
			<h1>projects</h1>
			<div className="container">
				<div className="item">
					<img
						src={project1}
						alt="budget-tracker"
						className="img-thumbnail"
						onClick={() => openInNewTab("https://fast-temple-66110.herokuapp.com/")}
					/>
					<h3>Budget Tracker</h3>
				</div>

				<div className="item">
					<img
						src={project2}
						alt="note-taker"
						className="img-thumbnail"
						onClick={() => openInNewTab("https://calm-dusk-28063.herokuapp.com/")}
					/>
					<h3>Note Taker</h3>
				</div>

				<div className="item">
					<img
						src={project3}
						alt="weather-db"
						className="img-thumbnail"
						onClick={() =>
							openInNewTab("https://eeleelksm.github.io/eeleelksm.challenge6/")
						}
					/>
					<h3>Weather Dashboard</h3>
				</div>

				<div className="item">
					<img
						src={project4}
						alt="tech-blog"
						className="img-thumbnail"
						onClick={() =>
							openInNewTab("https://desolate-reaches-61347.herokuapp.com/")
						}
					/>
					<h3>Tech Blog</h3>
				</div>

				<div className="item">
					<img
						src={project5}
						alt="dinner-movie"
						className="img-thumbnail"
						onClick={() => openInNewTab("https://jayibarra.github.io/movies/")}
					/>
					<h3>Dinner and a Movie</h3>
				</div>

				<div className="item">
					<img
						src={project6}
						alt="pet-adoption"
						className="img-thumbnail"
						onClick={() =>
							openInNewTab("https://guarded-basin-05749.herokuapp.com/ ")
						}
					/>
					<h3>Pet Adoption</h3>
				</div>
			</div>
		</section>
	);
}

export default Project;
