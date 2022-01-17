import React, { useState } from "react";

import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Project from "./components/Pages/Project/Project";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume/Resume";
import Nav from "./components/Navigation/Navigation";

function App() {
	// bummped into issues trying to create as SPA
	// worked with react router, but would not deploy correctly
	// simplified in order for page to have functionality

	// NEEDS TO BE REWORKED FOR SPA
	// const [pages] = useState([
	// 	{ name: "About" },
	// 	{ name: "Portfolio" },
	// 	{ name: "Contact" },
	// 	{ name: "Resume" },
	// ]);

	// const [currentPage, setCurrentPage] = useState(pages[0]);

	// const renderPage = () => {
	// 	switch (currentPage) {
	// 		case "Project":
	// 			return <Project />;
	// 		case "Resume":
	// 			return <Resume />;
	// 		case "Contact":
	// 			return <Contact />;
	// 		default:
	// 			return <About />;
	// 	}
	// };

	return (
		<div className="app">
			<div className="sections">
				<Header />
				<About />
				<Project />
				<Resume />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
