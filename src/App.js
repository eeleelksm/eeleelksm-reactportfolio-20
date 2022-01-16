import React, { useState } from "react";

import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Project from "./components/Pages/Project/Project";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume/Resume";

function App() {
	const [currentPage, handlePageChange] = useState("About");

	const renderPage = () => {
		switch (currentPage) {
			case "Project":
				return <Project />;
			case "Resume":
				return <Resume />;
			case "Contact":
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			<div>{renderPage(currentPage)}</div>
			<Footer />
		</div>
	);
}

export default App;
