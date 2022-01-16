import React from "react";
import resume from "../../../assets/documents/resume.pdf";

function Resume() {
	return (
		<section>
			<h1 className="page-title">resume</h1>
			<div className="resume">
				<div className="resume-list">
					<a href={resume} target="_blank">
						downloadable resume
					</a>
					<div className="experience">
						<h2 className="resume-title">experience</h2>
						<p>
							<b className="job-title">
								<span className="job-name">TapSEC Consulting, LLC</span>
							</b>{" "}
							<br /> Marketing Assistant
							<br />
							<i>FEBRUARY 2019 - PRESENT</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">US Tech Solutions (Google Contract)</span>
							</b>{" "}
							<br /> Lead QA Operations Analyst
							<br />
							<i>JANUARY 2020 - JULY 2021</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">Crowdstaffing (Google Contract) </span>
							</b>{" "}
							<br />
							QA Data Analyst
							<br />
							<i>AUGUST 2018 - NOVEMBER 2018</i>
							<br /> <br />
							<b className="job-title">
								<span className="job-name">Elite Personnel</span>
							</b>{" "}
							<br /> Quality Control Assistant
							<br />
							<i>MAY 2017 - AUGUST 2018</i>
							<br /> <br />
						</p>
					</div>
					<div className="education">
						<h2 className="resume-title">education</h2>
						<p>
							<b className="school-title">The George Washington University</b> <br />
							Coding Bootcamp Student
							<br />
							<i>AUGUST 2021 - FEBRUARY 2022, REMOTE - CERTIFICATE PENDING</i>
							<br /> <br />
							<b className="school-title">YellowBrick</b> <br /> FIT Gaming and Esports
							Industry Essential Certificate
							<br />
							<i>DECEMBER 2021 - NO EXPIRATION DATE</i>
							<br /> <br />
							<b className="school-title">American University </b> <br /> Bachelor of
							Science
							<br />
							MAJOR: Statistics MINOR: Business Administration
							<br />
							<i>AUGUST 2007 - AUGUST 2014</i>
							<br /> <br />
						</p>
					</div>
					{/* will add in once scrolling issue
          with footer is fixed.
          <div className="playtesting">
						<h2 className="resume-title">play testing</h2>
						<b className="job-title">
							<span className="job-name">Arena of Valor (AOV)</span>
						</b>{" "}
						<br /> Battle Arena (MOBA) Mobile Game
						<br />
						<i>DECEMBER 2021</i>
						<br />
						<br />
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Resume;
