import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-inner">
					<div className="footer-brand">
						<span className="brand-mark">C</span>
						<span className="brand-text">Cahya Rizqon</span>
					</div>

					<div className="footer-social">
						<a
							href="https://github.com/bimaasa-05"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub">
							<BsGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/cahya-rizqon-a5a532390/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn">
							<BsLinkedin />
						</a>
					</div>
				</div>
				<p className="footer-copy">© 2026 Cahya Rizqon. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
