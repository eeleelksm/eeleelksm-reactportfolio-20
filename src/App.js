import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/Pages/About";
import Project from "./components/Pages/Project";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Pages/Resume";

function App() {
	return (
		<>
			<div>
				<HashRouter>
					<Header />
					<div className="content">
						<Routes>
							<Route exact path="/" component={About} />
							<Route exact path="/projects" component={Project} />
							<Route exact path="/resume" component={Resume} />
							<Route exact path="/contact" component={Contact} />
						</Routes>
					</div>
				</HashRouter>
			</div>
			<About />
			<Footer />
		</>
	);
}

export default App;
