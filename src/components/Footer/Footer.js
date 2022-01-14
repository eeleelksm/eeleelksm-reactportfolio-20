import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
	return (
		<footer className="footer">
			<div className="itemContainer">
				<GitHubIcon className="icon" fontSize="large" />
				<span>Github</span>
			</div>
			<div className="itemContainer">
				<EmailIcon className="icon" fontSize="large" />
				<span>Email</span>
			</div>

			<div>© 2022</div>
		</footer>
	);
}

export default Footer;
