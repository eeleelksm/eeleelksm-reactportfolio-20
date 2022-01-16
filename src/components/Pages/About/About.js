import React, { useState } from "react";
import avatarImage from "../../../assets/images/avatar-bust.png";

function About() {
	return (
		<section id="about-me">
			<h1 className="page-title">about me</h1>
			<div className="about-box">
				<div className="avatar">
					<img src={avatarImage} style={{ width: "30%" }}></img>
				</div>
				<div className="about-text">
					<p>
						I'm a Fullstack Web Developer with hopes of transferring my newfound
						skills into programming and designing video games.
					</p>
					<p>
						I grab my inspiration from sci-fi and fantasy books. Some of my favorite
						games are Skyrim, Horizon Zero Dawn, The Kingdom Hearts franchise and The
						Sims franchise.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
