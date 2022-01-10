import React from "react";
import avatarImage from "../../assets/images/avatar-bust.png";

function About() {
	return (
		<section>
			<img src={avatarImage} style={{ width: "65%" }}></img>
			<p>
				Keshia-Lee is a Fullstack Web Developer with hopes of transferring her
				newfound skills into programming and designing video games.
			</p>
			<p>
				She grabs her inspiration from sci-fi and fantasy books. Some of her
				favorite games are Skyrim, Horizon Zero Dawn. Kingdom Hearts franchise and
				The Sims franchise.
			</p>
		</section>
	);
}

export default About;
