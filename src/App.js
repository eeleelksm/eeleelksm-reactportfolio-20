import React from "react";
import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Project from "./components/Pages/Project/Project";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume/Resume";

function App() {
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
