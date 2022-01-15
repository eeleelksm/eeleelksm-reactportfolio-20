import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
				<span>Github</span>
			</div>
			<div className="itemContainer">
				<EmailIcon
					className="icon"
					fontSize="large"
					onClick={() => openInNewTab("mailto:keshialeemartin@gmail.com")}
				/>
				<span>Email</span>
			</div>

			<div>© 2022</div>
		</footer>
	);
}

export default Footer;
