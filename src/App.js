import React from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Project";
import ContactForm from "./components/Contact";

function App() {
	return (
		<>
			<Header />

			<main>
				<ContactForm />
				<About />
				<Portfolio />
			</main>
		</>
	);
}

export default App;
