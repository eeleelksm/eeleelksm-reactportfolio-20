import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Pages/About";
import Project from "./components/Pages/Project";
import ContactForm from "./components/Pages/Contact";
import Footer from "./components/Footer";

function App() {
	// set the default when the application is opened to About Me
	const [currentPage, handlePageChange] = useState("About Me");

	// switch statement to render the page selected
	const renderPage = () => {
		switch (currentPage) {
			case "Project":
				return <Project />;
			case "Contact":
				return <ContactForm />;
			default:
				return <About />;
		}
	};

	return (
		<>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			<div>{renderPage(currentPage)}</div>
			<Footer />
		</>
	);
}

export default App;
