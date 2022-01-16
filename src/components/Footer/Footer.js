import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener, norefferer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<footer className="footer">
			<div className="itemContainer">
				<GitHubIcon
					className="icon"
					fontSize="large"
					onClick={() => openInNewTab("https://www.github.com/eeleelksm")}
				/>
			</div>
			<div className="itemContainer">
				<LinkedInIcon
					className="icon"
					fontSize="large"
					onClick={() =>
						openInNewTab("https://www.linkedin.com/in/keshia-lee-martin-05388a75/")
					}
				/>
			</div>
			<div className="itemContainer">
				<EmailIcon
					className="icon"
					fontSize="large"
					onClick={() => openInNewTab("mailto:keshialeemartin@gmail.com")}
				/>
			</div>

			<div>© 2022</div>
		</footer>
	);
}

export default Footer;
