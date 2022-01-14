import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
				<BrowserRouter>
					<Header />
					<div className="content">
						<Routes>
							<Route exact path="/" element={<About />} />
							<Route exact path="/projects" element={<Project />} />
							<Route exact path="/resume" element={<Resume />} />
							<Route exact path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
			<Footer />
		</>
	);
}

export default App;
