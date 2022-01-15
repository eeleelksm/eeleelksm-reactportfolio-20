import React from "react";

function Resume() {
	return (
		<section>
			<h1 className="page-title">resume</h1>
			<div className="resume">
				<div className="resume-list">
					<div className="experience">
						<h2 className="resume-title">Experience</h2>
						<p>
							<b className="job-title">
								<span className="job-name">TapSEC Consulting, LLC</span>
							</b>{" "}
							:: Marketing Assistant
							<br />
							<i>FEBRUARY 2019 - PRESENT</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">US Tech Solutions (Google Contract)</span>
							</b>{" "}
							:: Lead QA Operations Analyst
							<br />
							<i>JANUARY 2020 - JULY 2021</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">Crowdstaffing (Google Contract) </span>
							</b>{" "}
							:: QA Data Analyst
							<br />
							<i>AUGUST 2018 - NOVEMBER 2018</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">Elite Personnel</span>
							</b>{" "}
							:: Quality Control Assistant
							<br />
							<i>MAY 2017 - AUGUST 2018</i>
							<br /> <br />
						</p>
					</div>
					<div className="education">
						<h2 className="resume-title">Education</h2>
						<p>
							<b className="school-title">The George Washington University</b> ::
							Coding Bootcamp Student
							<br />
							<i>AUGUST 2021 - FEBRUARY 2022, REMOTE - CERTIFICATE PENDING</i>
							<br /> <br />
							<b className="school-title">YellowBrick</b> :: FIT Gaming and Esports
							Industry Essential Certificate
							<br />
							<i>DECEMBER 2021 - NO EXPIRATION DATE</i>
							<br /> <br />
							<b className="school-title">American University </b> :: Bachelor of
							Science
							<br />
							MAJOR: Statistics MINOR: Business Administration
							<br />
							<i>AUGUST 2007 - AUGUST 2014</i>
							<br /> <br />
						</p>
					</div>
					<div className="playtesting">
						<h2 className="resume-title">Play Testing</h2>
						<p>
							Battle Arena (MOBA) Mobile Game
							<br />
							<i>DECEMBER 2021</i>
							<br /> <br />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
