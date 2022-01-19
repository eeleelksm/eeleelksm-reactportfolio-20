import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Project from "./components/Pages/Project/Project";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume/Resume";

function App() {
	return (
		<>
			<div>
				<HashRouter>
					<Header />
					<div className="content">
						<Routes>
							<Route exact path="/" element={<About />} />
							<Route exact path="/projects" element={<Project />} />
							<Route exact path="/resume" element={<Resume />} />
							<Route exact path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</HashRouter>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
