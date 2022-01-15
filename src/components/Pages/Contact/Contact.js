import React, { useState } from "react";

function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { name, email, message } = formState;

	function handleChange(e) {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<section>
			<h1 className="page-title">contact me</h1>
			<div className="icons"></div>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						defaultValue={name}
						onChange={handleChange}
						name="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						defaultValue={email}
						onChange={handleChange}
						name="email"
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						defaultValue={message}
						onChange={handleChange}
						name="message"
						rows="3"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}

export default ContactForm;
