import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
			<div className="contact-icons">
				<GitHubIcon className="icon2" />{" "}
				<a
					href="https://github.com/eeleelksm"
					target="_blank"
					className="contact-link"
				>
					eeleelksm
				</a>
			</div>
			<div className="contact-icons">
				<EmailIcon className="icon2" />{" "}
				<a
					href="mailto:keshialeemartin@gmail.com"
					target="_blank"
					className="contact-link"
				>
					keshialeemartin@gmail.com
				</a>
			</div>
			<div className="contact-me">
				<form id="contact-form" onSubmit={handleSubmit}>
					<div className="contact-label">
						<label htmlFor="name">Name:</label>
						<br />
						<input
							type="text"
							defaultValue={name}
							onChange={handleChange}
							name="name"
						/>
					</div>
					<div className="contact-label">
						<label htmlFor="email">Email Address:</label>
						<br />
						<input
							type="email"
							defaultValue={email}
							onChange={handleChange}
							name="email"
						/>
					</div>
					<div className="contact-label">
						<label htmlFor="message">Message:</label>
						<br />
						<textarea
							defaultValue={message}
							onChange={handleChange}
							name="message"
							rows="3"
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
