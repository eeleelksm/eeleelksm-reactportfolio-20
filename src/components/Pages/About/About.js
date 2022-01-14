import avatarImage from "../../../assets/images/avatar-bust.png";

function About() {
	return (
		<section>
			<h1 className="page-title">about me</h1>
			<div className="about-box">
				<div className="avatar">
					<img src={avatarImage} style={{ width: "30%" }}></img>
				</div>
				<div className="about-text">
					<p>
						Keshia-Lee is a Fullstack Web Developer with hopes of transferring her
						newfound skills into programming and designing video games.
					</p>
					<p>
						She grabs her inspiration from sci-fi and fantasy books. Some of her
						favorite games are Skyrim, Horizon Zero Dawn. Kingdom Hearts franchise and
						The Sims franchise.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
