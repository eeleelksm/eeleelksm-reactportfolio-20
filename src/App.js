import React from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Project";

function App() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Portfolio />
			</main>
		</>
	);
}

export default App;
